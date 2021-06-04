class AnnualLists {
  data() {
    const hasTags = (tags) => tags.flat().length > 0;
    const tagsToObject = (tags) =>
      Object.fromEntries(tags.map((tag) => tag.split(":")));

    return {
      pagination: {
        data: "lists.annual",
        size: 1,
        alias: "list",
        addAllPagesToCollections: true,
      },
      permalink: "lists/",
      eleventyComputed: {
        title: (data) => {
          if (hasTags(data.list.tags)) {
            const { year, cat, subCat } = tagsToObject(data.list.tags);
            return `${cat}: ${year} ${subCat}`;
          }
        },
        tags: (data) => {
          if (hasTags(data.list.tags)) {
            data.list.tags.push("dynamic");
            return data.list.tags;
          }
        },
        permalink: (data) => {
          if (hasTags(data.list.tags)) {
            const { year, cat, subCat } = tagsToObject(data.list.tags);
            return `lists/${cat}/${year}/${subCat}/`;
          }
        },
      },
    };
  }

  render(data) {
    return `
      <h2>${data.title}</h2>
      <ol>
        ${data.list.list
          .map((item) => {
            return `<li>${item.title}</li>`;
          })
          .join("\n")}
      </ol>
    `;
  }
}

module.exports = AnnualLists;
