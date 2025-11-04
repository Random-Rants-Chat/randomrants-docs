---
slug: /commands/runAs/
title: ;runAs | Message Commands
hide_table_of_contents: true
---

# `;runAs` Command

:::info
This command is an owner-only command, only people with ownership can use this. (the room owner, and any promoted people)
:::

Runs the specified command using the specified user as the sender. This translates things like `@self` to that specified user. You can also use it on multiple people, to make everyone run that command in the room.

# Usage

```messagecommand
;runAs <Username> <Command>
```

# Examples

```messagecommand
;runAs gvbvdxx ;popupMessage @self This command was ran by gvbvdxx, but isn't actually!
```
