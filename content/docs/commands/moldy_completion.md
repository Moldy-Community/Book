+++
title = "get starter with the commands"
description = "the documents of the moldy tool."
date = 2025-05-01t08:00:00+00:00
updated = 2021-05-01t08:00:00+00:00
weight=2
+++

## moldy completion

Generate completion script

### Synopsis

To load completions:

Bash:

  $ source <(moldy completion bash)

  # To load completions for each session, execute once:
  # Linux:
  $ moldy completion bash > /etc/bash_completion.d/moldy
  # macOS:
  $ moldy completion bash > /usr/local/etc/bash_completion.d/moldy

Zsh:

  # If shell completion is not already enabled in your environment,
  # you will need to enable it.  You can execute the following once:

  $ echo "autoload -U compinit; compinit" >> ~/.zshrc

  # To load completions for each session, execute once:
  $ moldy completion zsh > "${fpath[1]}/_moldy"

  # You will need to start a new shell for this setup to take effect.

fish:

  $ moldy completion fish | source

  # To load completions for each session, execute once:
  $ moldy completion fish > ~/.config/fish/completions/moldy.fish

PowerShell:

  PS> moldy completion powershell | Out-String | Invoke-Expression

  # To load completions for every new session, run:
  PS> moldy completion powershell > moldy.ps1
  # and source this file from your PowerShell profile.

In error case:
  If you have any error report on Github for fix that
  in the next version :D


```
moldy completion [bash|zsh|fish|powershell]
```

### Examples

```
moldy comp bash
```

### Options

```
  -h, --help   help for completion
```

### SEE ALSO

* [moldy](moldy.md)	 - The best project starter and manager of the world

###### Auto generated by spf13/cobra on 5-Jul-2021
