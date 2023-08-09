---
  title: "Deploy website lên Github Pages?"
  description: "My implementation of a CI/CD pipeline to deploy my website"
  publishDate: "2023-08-05"
  readingTime: 3
  tags: ['astro', 'github', 'github-actions', 'pnpm', 'ci/cd']
  draft: false
---

<!-- I deployed my website with Vercel before because it was easy and the free tier is generous enough. But on a beautiful day when I accidentally messed up the 1000 image optimization limit while building a gallery website, I thought to myself: "Well, sh*t". I don't want to make that same mistake again, now that I have used up 80% of the limit, and I want to reserve the remaining space for future projects. So I decided to move to Github Pages (which is what I should have gone with in the first place). -->

Trước kia mình có deploy website này lên Vercel vì nó cũng khá đơn giản và hạn mức miễn phí cũng đủ để sử dụng. Nhưng vào một ngày đẹp trời mình đã lỡ sử dụng gần hết giới hạn "1000 Image Optimization" khi đang build một trang web gallery, và rồi mình nghĩ: "Thôi chết m* rồi". Mình không muốn lặp lại lỗi đó thêm một lần nữa, khi mà bây giờ mình đã sử dụng 80% mức giới hạn đó, và mình cũng muốn dành phần còn lại cho những dự án sau này. Thế nên mình đã quyết định chuyển qua Github Pages (thứ mà đáng lẽ mình nên sử dụng từ lúc đầu).

## Github Pages

Nó free, tất nhiên rồi. Ý mình là hạn mức free tier của nó cũng đủ xài và mình không nghĩ là một website đơn giản như này sẽ vượt quá mức giới hạn đó. Bạn có thể xem thêm chi tiết về Github Pages ở [đây](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#limits-on-use-of-github-pages).

Vấn đề với Github Pages là nó cần file `index.html`. Tuy nhiên website này mình code bằng Astro, và file `index.html` chỉ có khi mình build project ra. Đây là lúc mà `Github Actions` giúp mình.

## Github Actions

<!-- Github Actions is a CI/CD tool that allows you to automate your workflow. It's free for public repositories. You can view more details [here](https://docs.github.com/en/actions/learn-github-actions/introduction-to-github-actions). -->

Github Actions là một công cụ CI/CD cho phép bạn có thể automate workflow của mình. Nó free với những repo public. Bạn có thể xem chi tiết ở [đây](https://docs.github.com/en/actions/learn-github-actions/introduction-to-github-actions).

<!-- Astro has a [documentation](https://docs.astro.build/en/guides/deploy/github/) on how to do deploy with Github Actions. It uses `withastro action` behind the scene to build the website. But there's a little bug with the `pnpm` that I use for the package manager that breaks the build. -->

Astro có một trang [doc](https://docs.astro.build/en/guides/deploy/github/) hướng dẫn việc deploy với Github Actions. Nó dùng `withastro action` để build. Tuy nhiên trong quá trình deploy thì mình gặp phải một con bug nho nhỏ với `pnpm` (package manager mình đang sử dụng) làm cho quá trình build bị lỗi.

![pnpm bug](../../../assets/pnpm-error.png)

Tại sao lại là `pnpm` ư? Well, `npm` khá chậm, mặc dù là `withastro action` chạy tốt với `npm` (mình đã build với `npm` khi mình phát hiện ra `pnpm` bị lỗi), nhưng mình muốn tốc độ của `pnpm`, không chỉ cho quá trình build mà còn cho quá trình dev nữa.

Thế là sau một hồi mò mẫm, mình phát hiện ra là bug này là do phiên bản `pnpm` mình đang sử dụng xung đột với `withastro action`. Vì vậy mình quyết định viết lại build script. Để hiểu quá trình mà `withastro action` nó hoạt động, mình đã phải đọc [mã nguồn](https://github.com/withastro/action/blob/main/action.yml) của nó và khá là ngạc nhiên khi logic phía sau cũng không phức tạp lắm. Tóm gọn lại thì nó gồm những bước sau:

1. Kiểm tra package manager dựa trên file `package-lock.json`
2. Setup pnpm
3. Setup Node
4. Cài đặt dependencies
5. Build
6. Upload artifacts

<!-- Well, I just followed the steps and just changed the version to a newer one, of course with the help from the [pnpm documentation](https://pnpm.io/continuous-integration#github-actions): -->

Mình làm theo những bước đó và chỉ thay đổi phiên bản của `pnpm` thành phiên bản mới hơn, tất nhiên là với sự giúp đỡ từ [trang doc của pnpm](https://pnpm.io/continuous-integration#github-actions):

```yaml
# other stuff up here...
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    # I need to checkout the repository first
    - name: Checkout your repository using git
      uses: actions/checkout@v3
    # Setup the package manager. Since I use pnpm so I hardcode it anyway
    - name: Setup pnpm
      uses: pnpm/action-setup@v2
      with:
        version: 8
    # Setup Node, with caching package dependencies
    - name: Use Node.js
      uses: actions/setup-node@v3
      with:
        node-version: 18
        cache: 'pnpm'
    # Install dependencies
    - name: Install dependencies
      run: pnpm install
    # Build the website
    - name: Build
      run: pnpm run build
    # Upload the artifacts
    - name: Deploy to GitHub Pages
      uses: actions/upload-pages-artifact@v2
      with:
        # The directory that the website is built to (dist in my case)
        path: dist 
```

Phần còn lại của script thì giống như trong [trang doc của Astro](https://docs.astro.build/en/guides/deploy/github/), với một chút thay đổi ở job `deploy`:

``` yaml
jobs:
  # other stuff up here...
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2 # change the version to v2
```

Các bước còn lại khá đơn giản:

1. Đổi tên repo thành `<username>.github.io`
2. Edit file `astro.config.mjs`:

```js
export default defineConfig({
  site: 'https://<username>.github.io',
  // other stuff down here...
})
```

1. Trên GitHub, vào phần Settings của repo và tìm tới Pages section.
2. Chọn GitHub Actions là source.

<!-- And that's it. Now whenever I commit and push something new to the repo, Github Actions will automatically build and deploy the website for me. Nonetheless, I still hope that the `withastro action` will be fixed soon so that I can use it again. -->

Và thế là hết. Bây giờ khi mình commit và push thứ gì đó lên repo thì Github Actions sẽ tự động build và deploy website. Tuy là vậy những mình cũng hy vọng là `withastro action` sẽ sớm được fix để mình có thể sử dụng lại nó.

![build success](../../../assets/build-success.png)

Cả trang web chưa tới 5mb, không tệ huh? Bạn có thể xem toàn bộ script trên [Github repo](https://github.com/nhthieu/nhthieu.github.io/blob/main/.github/workflows/deploy.yml) của mình.

## Tham khảo

- [Astro documentation](https://docs.astro.build/en/guides/deploy/github/)
- [pnpm documentation](https://pnpm.io/continuous-integration#github-actions)
- [Github Actions documentation](https://docs.github.com/en/actions/learn-github-actions/introduction-to-github-actions)
- [withastro action](https://github.com/withastro/action/blob/main/action.yml)
