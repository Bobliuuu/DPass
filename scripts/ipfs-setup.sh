#!/bin/bash

brew install gnupg
gpg --batch --gen-key batch.txt
gpg --export --armor -email > pubkey.asc
gpg --import pubkey.asc