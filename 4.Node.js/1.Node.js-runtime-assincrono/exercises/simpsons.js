const fs = require('fs').promises;

const readSimpsons = async (pathname) => {
    try {
        const data = await fs.readFile(pathname, 'utf-8');
        const dataJSON = JSON.parse(data);
        return dataJSON;
    } catch (error) {
        console.error(`Erro ao ler o arquivo: ${error.message}`);
    }
};

const writeFile = async (path, content) => {
    try {
        await fs.writeFile(path, JSON.stringify(content));
        console.log('Arquivo escrito com sucesso!');
      } catch (err) {
        console.error(`Erro ao escrever o arquivo: ${err.message}`);
      }
};

const findSimpson = async (simpsonId) => {
    const dataSimpsons = await readSimpsons('./simpsons.json');
    const promise = new Promise((resolve, reject) => {
        const foundSimpson = dataSimpsons.find(({ id }) => +(id) === simpsonId);
        if (foundSimpson === undefined) {
            reject(new Error("id não encontrado"));
        } else {
            resolve(foundSimpson);
        }
    });
    return promise;
};

const removeSimpson = async (idsToRemove) => {
    const dataSimpsons = await readSimpsons('./simpsons.json');
    const filteredSimpsons = dataSimpsons.filter((simpson) => 
    !idsToRemove.some((id) => id == simpson.id));

    await writeFile('./simpsons.json', filteredSimpsons);
};

const createSimpsonFamily = async () => {
    const dataSimpsons = await readSimpsons('./simpsons.json');
    const familySimpsons = dataSimpsons.filter(({ id }) => id < 5);
    writeFile('./simpsonFamily.json',familySimpsons);
};

const addSimpson = async () => {
    const dataSimpsons = await readSimpsons('./simpsons.json');
    const dataSimpsonsFamily = await readSimpsons('./simpsonFamily.json');
    const findSimpson = dataSimpsons.find(({ name }) => name === 'Nelson Muntz');
    const newSimpsonFamily = [...dataSimpsonsFamily, findSimpson];
    writeFile('./simpsonFamily.json', newSimpsonFamily);
};

const main = async () => {
    // const dataSimpsons = await readSimpsons();
    // dataSimpsons.forEach(({ id, name }) => {
    //     console.log(`${id} - ${name}`);
    // });
    const simpson = await findSimpson(1);
    console.log(simpson);
    // await removeSimpson([6, 10]);
    // createSimpsonFamily();
    // addSimpson();
};

main();