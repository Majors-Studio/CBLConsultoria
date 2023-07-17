export const getMarkdown = (item: any, nodeType: string) => {
  if (!item) return console.log("Item is undefined")

  let finalHtml = ""

  if (item.length > 0) {
    for (let i = 0; i < item.length; i++) {
      const element = item[i]
      finalHtml += getMarkdown(element, nodeType)
    }
  } else {
      console.log(item.nodeType)
    switch (item.nodeType) {
      case "paragraph":
        finalHtml += `<span>${item.value}<span>`
        break
      case "heading-1":
        finalHtml += `<h1 style="font-size:32px;">${item.value}</h1>`
        break
      case "heading-2":
        finalHtml += `<h2 style="font-size:28px;">${item.value}</h2>`
        break
      case "heading-3":
        finalHtml += `<h3 style="font-size:24px;">${item.value}</h3>`
        break
      case "heading-4":
        finalHtml += `<h4 style="font-size:16px;">${item.value}</h4>`
        break
      case "heading-5":
        finalHtml += `<h5>${item.value}</h5>`
        break
      case "heading-6":
        finalHtml += `<h6>${item.value}</h6>`
        break
      case "list-item":
        finalHtml += `<ul>${item.content[0].content
          .map((item: any) => {
            return `<li>${getMarkdown(item, item.nodeType)}</li>`
          })
          .join("")}</ul>`

        break
      case "ordered-list-item":
        finalHtml += `<ol>${item.content[0].content
          .map((item: any) => `<li>${getMarkdown(item, item.nodeType)}</li>`)
          .join("")}</ol>`
        break
      case "embedded-asset-block":
        finalHtml += `<img src="${item.content.data?.fields.file.url}" alt="${item.content.data?.target.fields.title}" />`
        break
      case "embedded-entry-block":
        finalHtml += `<p>${item.content.data?.fields.title}</p>`
        break
      case "blockquote":
        finalHtml += `<blockquote>${item.value}</blockquote>`
        break
      case "hr":
        finalHtml += `<hr />`
        break
      case "hyperlink":
        finalHtml += `<a href="${item.data.uri}" ><i><b>${getMarkdown(
          item.content,
          nodeType
        )}</b></i></a>`
        break
      default:
        if (!item.value) finalHtml += `<br />`
        if (item.value) finalHtml += `<span>${item.value}</span>`
        break
    }
  }

  return finalHtml
}
