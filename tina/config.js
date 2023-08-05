import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID, // Get this from tina.io
  token: process.env.TINA_TOKEN, // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Articles",
        path: "src/content/blog",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: false,
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            required: true,
          },
          {
            type: "datetime",
            name: "publishDate",
            label: "Publish Date",
            required: true,
          },
          {
            type: "boolean",
            name: "isDraft",
            label: "Draft",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
            templates: [
              {
                name: "Alert",
                label: "Alert",
                fields: [
                {
                  name: "children",
                  label: "Content",
                  type: "rich-text"
                },
                {
                  name: "AlertType",
                  label: "Alert Type",
                  type: "string",
                },
              ]}  
            ],
          },
        ],
      },
    ],
  },
});
