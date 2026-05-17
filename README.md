# Jarvis

A terminal AI agent with tool use, human-in-the-loop approval, and automatic context compaction.

Jarvis is a TypeScript-based AI agent that runs in your terminal. It chats with an OpenAI model, calls tools to do real work on your machine (read files, run shell commands, execute code, search the web), and asks you to approve each tool call before it runs. The UI is built with [Ink](https://github.com/vadimdemedes/ink), responses stream as they're generated, and conversations automatically compact when they approach the model's context window.

This repo also doubles as course material — see [Course branches](#course-branches) below.

## Features

- **Multi-turn agent loop** with streaming responses and token-usage tracking
- **Tool calling** across six tool categories (file I/O, shell, code execution, web search, datetime)
- **Human-in-the-loop approval** — every tool call requires your confirmation before it executes
- **Automatic context compaction** when the conversation approaches the model's context window
- **Interactive terminal UI** built with Ink + React
- **Built-in eval suite** for single-turn, multi-turn, and tool-selection scenarios, traced via [Laminar](https://www.lmnr.ai/)

## Quick start

**Prerequisites:** Node.js (ESM-capable, v20+ recommended).

```bash
npm install
```

Create a `.env` file in the project root with:

```env
OPENAI_API_KEY=sk-...
LMNR_PROJECT_API_KEY=...
```

Then start the agent in watch mode:

```bash
npm run dev
```

Or run it once:

```bash
npm start
```

## Available tools

| Tool | What it does |
| --- | --- |
| `readFile` | Read a file from disk |
| `writeFile` | Write or overwrite a file |
| `listFiles` | List files in a directory |
| `deleteFile` | Delete a file |
| `runCommand` | Execute a shell command |
| `executeCode` | Run a snippet of JavaScript/TypeScript |
| `webSearch` | Search the web |
| `getDateTime` | Get the current date and time |

Every tool call surfaces in the UI for explicit approval before it runs.

## Project structure

```
jarvis/
├── src/
│   ├── agent/
│   │   ├── run.ts          # Core agent loop: streaming, tool dispatch, compaction
│   │   ├── executeTool.ts  # Tool execution + approval gate
│   │   ├── tools/          # Tool definitions (file, shell, code, web, datetime)
│   │   ├── context/        # Token counting and conversation compaction
│   │   └── system/         # System prompt and message filtering
│   ├── ui/                 # Ink + React terminal UI
│   └── index.ts            # Entry point
├── evals/                  # Laminar eval suites
├── notes/                  # Lesson notes (course material)
├── openspec/               # Change proposals
└── package.json
```

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Run the agent in watch mode (auto-restart on changes) |
| `npm start` | Run the agent once |
| `npm run build` | Compile TypeScript to `dist/` |
| `npm run eval` | Run the full Laminar eval suite |
| `npm run eval:file-tools` | Eval file tools only |
| `npm run eval:shell-tools` | Eval shell tools only |
| `npm run eval:agent` | Run the multi-turn agent eval |

## Evaluations

Evals live in [`evals/`](./evals) and run via the Laminar CLI (`npx lmnr eval`). The suite covers single-turn tool selection (file ops, shell), and end-to-end multi-turn behavior. Traces and results are reported in your Laminar project — make sure `LMNR_PROJECT_API_KEY` is set before running.

## Course branches

This repository is used to teach how to build an AI agent from scratch. The complete app lives on the `done` branch; each lesson branch contains a progressively smaller slice of the app, working **backwards** from `done` to a starter template.

| Branch | Lesson |
| --- | --- |
| `done` | Complete app |
| `09-hitl` | Human-in-the-loop approval |
| `08-shell-tool` | Shell tool |
| `07-web-search-context-management` | Web search + context handling |
| `06-file-system-tools` | File system tools |
| `05-multi-turn-evals` | Multi-turn evals |
| `04-the-agent-loop` | The agent loop |
| `03-single-turn-evals` | Single-turn evals |
| `02-tool-calling` | Tool calling |
| `01-intro-to-agents` | Intro to agents |
| starter | Starter template |

Lesson notes live in [`notes/`](./notes).

## Tech stack

TypeScript · Node.js (ESM) · [Vercel AI SDK](https://sdk.vercel.ai/) (`ai`, `@ai-sdk/openai`) · [Ink](https://github.com/vadimdemedes/ink) + React · [Zod](https://zod.dev/) · [Laminar](https://www.lmnr.ai/) · [Biome](https://biomejs.dev/)
