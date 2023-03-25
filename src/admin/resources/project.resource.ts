import importExportFeature from '@adminjs/import-export';

const projectResource = (model) => {
  return {
    resource: model,
    features: [
      importExportFeature(),
    ],
    options: {
      properties: {
        projectId: { isTitle: true, position: 1},
        projectName: { isTitle: true, position: 2},
        price: { isTitle: true, position: 3,},
        type: { isTitle: true, position: 4,},
        date: { isTitle: true, position: 5,},
        clientContact: { isTitle: true, position: 6,},
        budget: { isTitle: true, position: 7,},
        team: { type: 'reference', isArray: true },
        webFront: { type: 'reference', isArray: true },
        webBackend: { type: 'reference', isArray: true },
        appFront: { type: 'reference', isArray: true },
        appBackend: { type: 'reference', isArray: true },
        planer: { type: 'reference', isArray: true },
        pm: { type: 'reference', isArray: true },
        designer: { type: 'reference', isArray: true },
      },
      parent : {
        name : '프로젝트',
      },
    },
  }
}

export default projectResource