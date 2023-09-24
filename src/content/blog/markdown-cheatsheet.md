---
  title: "Markdown Cheatsheet"
  publishDate: "2023-06-23"
  tags: ['markdown', 'syntax']
  previousPost: motherfucking-blog
  nextPost: i18n
  draft: false
---

## Headings

```md
# Heading 1
## Heading 2
### Heading 3
```

# Heading 1

## Heading 2

### Heading 3

---

## Text

```md
**Bold**
*Italic*
~~Strikethrough~~
Normal text
```

**Bold**\
*Italic*\
~~Strikethrough~~\
Normal text

---

## Lists

```md
- Unordered list item 1
- Unordered list item 2
- Unordered list item 3

1. Ordered list item 1
2. Ordered list item 2
3. Ordered list item 3
```

- Unordered list item 1
- Unordered list item 2
- Unordered list item 3

1. Ordered list item 1
2. Ordered list item 2
3. Ordered list item 3

---

## Links

```md
[Link text](https://www.example.com)
[Internal link](#headings)
```

[Link text](https://www.youtube.com/watch?v=dQw4w9WgXcQ)\
[Internal link](#headings)

---

## Images

```md
![Alt text](https://www.example.com/image.jpg)
```

![Alt text](https://i.guim.co.uk/img/media/3aab8a0699616ac94346c05f667b40844e46322f/0_123_5616_3432/master/5616.jpg?width=700&quality=85&auto=format&fit=max&s=a476da702aff265ce6f586be1412b1e1)

---

## Table

```md
| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| Row 1    | Row 1    | Row 1    |
| Row 2    | Row 2    | Row 2    |
| Row 3    | Row 3    | Row 3    |
```

| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| Row 1    | Row 1    | Row 1    |
| Row 2    | Row 2    | Row 2    |
| Row 3    | Row 3    | Row 3    |

---

## Footnotes

```md
Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.

[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.
```

Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.

[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.

---

## Displaying code

````md
`Inline code`

or span multiple lines

```js
const foo = "bar";
console.log(foo);
```
````

`Inline code`

```js
const foo = "bar";
console.log(foo);
```

For language specific syntax highlighting, specify the language at the beginning of the code block.

---

## Quotes

```md
> This is a quote. It can span mutiple lines
>
> like this
```

> This is a quote. It can span mutiple lines
> 
> like this
