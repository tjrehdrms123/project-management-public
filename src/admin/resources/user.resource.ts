const userResource = (model) => {
    return {
      resource: model,
      options: {
        parent : {
          name : '프로젝트',
        },
      }
    }
  }
  
  export default userResource