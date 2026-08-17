use serde::{Deserialize, Serialize};


#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct Payin {
    pub id: String,
    pub num: String
}

impl Payin {
    pub fn new(id: &str, num: &str) -> Result<Payin, String> {
        let payin = Payin { id: id.to_string(), num: num.to_string() };
        Ok(payin)
    }
}