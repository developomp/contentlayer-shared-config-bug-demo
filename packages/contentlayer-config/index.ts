import rehypeStringify from "rehype-stringify"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import { Processor } from "unified"

export function markdown(builder: Processor) {
    builder.use(remarkParse)
    builder.use(remarkRehype, { allowDangerousHtml: true })
    builder.use(rehypeStringify)
}
