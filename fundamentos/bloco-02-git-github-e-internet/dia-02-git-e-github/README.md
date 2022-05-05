##Para remover do git
git rm

##Adicionar e comitar
git commit -a

##Recuperando arquivo deletado
git checkout XXXX~1 nomeDoArquivo

##Atalho para criar/trocar branch

git checkout -b NOME

##Outros
git log
git fetch

##gitignore


# Created by https://www.toptal.com/developers/gitignore/api/visualstudiocode
# Edit at https://www.toptal.com/developers/gitignore?templates=visualstudiocode

### VisualStudioCode ###
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json
!.vscode/*.code-snippets

# Local History for Visual Studio Code
.history/

# Built Visual Studio Code Extensions
*.vsix

### VisualStudioCode Patch ###
# Ignore all local history of files
.history
.ionide

# Support for Project snippet scope
.vscode/*.code-snippets

# Ignore code-workspaces
*.code-workspace

# End of https://www.toptal.com/developers/gitignore/api/visualstudiocode
