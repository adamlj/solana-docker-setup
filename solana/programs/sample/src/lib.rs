pub mod state;
pub mod processor;
pub mod constants;
pub mod errors;


use anchor_lang::prelude::*;
use state::*;
use processor::*;
use constants::*;
use errors::*;
declare_id!("...");

#[program]
pub mod sample {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {

        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}



