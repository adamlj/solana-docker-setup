# Solana development setup in Docker

This is a project to be used as a template for developing solana with Anchor and a frontend dApp in React with MUI.

Start with docker-compose up

This will start:
- dApp on localhost:80
- A local solana-test-validator
- solana container which can be used to work with local chain.

## Solana Container

Program is located in solana

To work with local chain access the container with

```

docker-compose exec solana bash


solana

cd /solana
anchor build
anchor deploy

```

## Setup
- Run anchor build and anchor deploy
- Update program id in solana/programs/sample/lib.rs and solana/Anchor.toml
- Copy idl.json from solana/target/idl.json to app/idl.json
