function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getDate() {
  return new Date();
}

async function main() {
  while(true) {
    try  {
      console.log(getDate()); //fixed the typo error 
    }
    catch(e) {
      console.log(e);
    }
    finally {
      await sleep(5000);
    }
  }
}

main();
