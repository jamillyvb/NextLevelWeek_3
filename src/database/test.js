const Database = require('./db');

Database.then(async db => {

    //INSERIR DADOS DA TABELA
     await db.run(`
        
        INSERT INTO orphanages(
        lat,  
        lng,
        name,
        about,
        whatsapp, 
        images,
        instructions, 
        opening_hours,
        open_on_weekends

        ) VALUES (
            "-27.222633",
            "-49.6555874",
            "Lar das Meninos",
            "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
            "98283928390",
            "https://images.unsplash.com/photo-1586022773518-47a6bf08fa90?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "Venha como se sentir a vontade e traga muito amor e paciência para dar.", 
            "Horário de visitas Das 18h até 8h.",
            "0"            
        );
    `)

    //consultar dados da TABELA
    const selectedOphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOphanages)
})