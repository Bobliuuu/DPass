#!/bin/bash

# Usage: ./ipfs-func [value] [name]

val=$1
name=$2
gpg --encrypt --recipient name val
sol=$(ipfs add myriad.pdf.gpg)
echo $sol > ipfs.log
res=$(pin ls 2>&1)
echo "$output" >&2 
ipfs get $sol
gpg --decrypt $sol > $val
echo "Done"