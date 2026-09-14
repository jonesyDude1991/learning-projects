//
//*********************************CLIENT*************************************


import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

const client = new Client({
  name: "my-first-mcp-client",
  version: "1.0.0",
});

const transport = new StdioClientTransport({
  command: "npx",
  args: ["tsx", "server.ts"],
});

await client.connect(transport);

//const tools = await client.listTools();

const result = await client.callTool({
  name: "add_numbers",
  arguments: {
    a: 5,
    b: 7,
  }
});

console.log(result);
