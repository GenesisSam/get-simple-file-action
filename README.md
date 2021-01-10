# get-simple-file-action

In Github actions, get file data

## How to use

```yml
steps:
  - uses: actions/checkout@v1

  - name: create temp file
    run: |
      mkdir tmp
      echo "v1.0.0-beta.10" > tmp/version

  - uses: GenesisSam/get-simple-file-action@v1.0.5
    id: openFile
    with:
      file-name: ${{ 'tmp/version' }}

  - name: result
    if: success() && steps.openFile.outputs.data
    run: echo "tmp/version> ${ steps.openFile.outputs.data }"
```
