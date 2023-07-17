import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import {
  Options,
} from "@contentful/rich-text-react-renderer" 

import * as S from "@/styles/markdown"

export const markdownOptions: Options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <strong>{text}</strong>,
      [MARKS.ITALIC]: (text) => <em>{text}</em>,
      [MARKS.UNDERLINE]: (text) => <u>{text}</u>,
      [MARKS.CODE]: (text) => <code>{text}</code>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <S.Paragraph>{children}</S.Paragraph>
      ),
      [BLOCKS.HEADING_1]: (node, children) => (
        <S.Heading1>{children}</S.Heading1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <S.Heading2>{children}</S.Heading2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <S.Heading3>{children}</S.Heading3>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <S.Heading4>{children}</S.Heading4>
      ),
      [BLOCKS.HEADING_5]: (node, children) => (
        <S.Heading5>{children}</S.Heading5>
      ),
      [BLOCKS.HEADING_6]: (node, children) => (
        <S.Heading6>{children}</S.Heading6>
      ),
      [BLOCKS.UL_LIST]: (node, children) => <S.UlList>{children}</S.UlList>,
      [BLOCKS.OL_LIST]: (node, children) => <S.OlList>{children}</S.OlList>,
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <S.ListItem>{children}</S.ListItem>
      ),
      [BLOCKS.QUOTE]: (node, children) => <S.Quote>{children}</S.Quote>,
      [BLOCKS.HR]: (node, children) => <hr />,
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
        <S.Image src={node.data.target.fields.file.url} />
      ),
      [BLOCKS.EMBEDDED_ENTRY]: (node, children) => <div>{children}</div>,
    },
  }