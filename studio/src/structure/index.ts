export const cv = (S, context) =>
  S.list()
    .title('Content')
    .items([
      ...S.documentTypeListItems().filter((listItem) => !['cv'].includes(listItem.getId())),
      S.listItem()
        .title('CV')
        .child(S.editor().id('cv').schemaType('cv').documentId('cv').title('CV')),
    ])
