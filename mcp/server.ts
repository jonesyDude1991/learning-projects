//
//********************SERVER********************


import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js"
import { z } from "zod"
const server = new McpServer({
  name: "my-first-mcp-server",
  version: "1.0.0",
});

server.tool(
  "add_numbers",
  "Add two numbers together",
  {
    a: z.number().describe("First number"),
    b: z.number().describe("Second number"),
  },
  async ({ a, b }) => {
    return {
      content: [
        {
          type: "text",
          text: String(a + b),
        },
      ],
    };
  }
);

const transport = new StdioServerTransport();

await server.connect(transport);


