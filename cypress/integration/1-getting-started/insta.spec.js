describe('Login e registro de usuarios alura pic', () => {

    beforeEach(() => {
        //  cy.visit('https://www.instagram.com/p/Cd_eMacFZpu/')
        cy.visit('https://www.instagram.com/p/CeBT4DhLLIw/')

    })
    it('entra post', () => {
        cy.wait(2000);
        // cy.get('._0PwGv > a > ._7UhW9').click()
        // cy.get('._0PwGv > a > ._7UhW9').click()
        //cy.wait(2000);
        cy.get(':nth-child(1) > ._9GP1n > .f0n8F > ._2hvTZ').type('')
        cy.wait(2000);
        cy.get(':nth-child(2) > ._9GP1n > .f0n8F > ._2hvTZ').type('')
        cy.wait(2000);
        cy.get('.sqdOP > .qF0y9').click()
        cy.wait(2000);
        cy.wait(2000);
        // clica em agora não
        cy.get('.cmbtv > .sqdOP').click()
        cy.wait(9000);
        //    cy.contains('._aacr').type('Esta página não está disponível')

        



        let found = false
        const timeout = 10000
        for (let i = 0; i < timeout && !found; i++) {
            function escolhevalor1a3minutos(min, max) {
                min = Math.ceil(60000); //1 minuto
                max = Math.floor(100000); // 3 minutos
                return Math.floor(Math.random() * (max - min + 1)) + min;// vai sermpre retornar valor de 1 a 3 minutos para não ser sempre mesmo tempo
            }
            // const months = ["@iuribauer"," @luana.amandio", "@lia.samara", "@laariamandio", " @beatriz.amandio ", "@nina_amandio", "@luana.amandio @nina_amandio"];
            const months = [" @iuribauer ", " @luanlenonamandiodos ", " @thainakarsten ", " @laariamandio ", " _kauecorrea ", " @nina_amandio ", " @luana.amandio ", " @luana.amandio "];

            var rand = months[(Math.random() * months.length) | 0] // Vai sortear algum desses array para não ser sempre mesmo comentario

            //vai clciar comentario e escrever
            cy.get('._ablz').click()
            cy.get('._ablz').type(rand)//aqui sempre vai pegar uma das pessoas escolhidas para comentar
            cy.get('._aao9 > ._acan > ._aacl').click()
            cy.wait(escolhevalor1a3minutos())//vai escolher o tempo de 1 a 3 minutos para sermpre não ser igual
        }


        /*
    cy.visit('https://www.instagram.com/p/CeBT4DhLLIw/')
 //   cy.get('.JErX0 > .sqdOP').click()
 cy.wait(2000);
 cy.wait(2000);*/
        //vai clciar comentario e escrever
        //  cy.get('._ablz').type('@iuribauer @luana.amandio')
        //   cy.get('._aao9 > ._acan > ._aacl').click()

    })


    /*
          Cypress._.times(10, (k) => {
            it(`REPETE ISSO ${k + 1} / 10`, () => {
                cy.get('._ablz').click()
                cy.get('._ablz').type('@iuribauer @luana.amandio')
                cy.get('._aao9 > ._acan > ._aacl').click()
                CY.wait(60000)
            })
          })*/


    /*
        it('entra post kkk', () => {
    
            function escolhevalor1a3minutos(min, max) {
                min = Math.ceil(60000); //1 minuto
                max = Math.floor(180000); // 3 minutos
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
    
            var myArray = ['January', 'February', 'March']; 
            const months = ["@iuribauer @luana.amandio", "@lia.samara @beatriz.amandio ", "@andreiwillian_  @_kauecorrea", "@laariamandio  @nina_amandio", "@luana.amandio @nina_amandio"];
            var rand = months[(Math.random() * months.length) | 0]
    
            //    cy.getRandomIntInclusive()
           
            cy.log(escolhevalor1a3minutos())
            cy.log(rand)
            //   cy.get('._ablz').click()
            //   cy.get('._ablz').type('@iuribauer @luana.amandio')
            //    cy.get('._aao9 > ._acan > ._aacl').click()z
            //    CY.wait(60000)
        })
    ///////////////////////////////////////////
    
        
             it('verifica campos', () =>{
        
               // cy.get('#_2hvTZ #pexuQ zyHYP"]').type('123');
                cy.get(':nth-child(1) > ._9GP1n > .f0n8F > ._2hvTZ').type('leonardoamandio')
                cy.wait(2000);
                cy.get(':nth-child(2) > ._9GP1n > .f0n8F > ._2hvTZ').type('ams9903123@')
                cy.wait(2000);
                cy.get('.sqdOP > .qF0y9').click()
                cy.wait(2000);
                cy.get('.eyXLr').type('gabiamandeodesigner')
                cy.wait(2000);
                cy.get('#-qQT3').click()
                cy.get('.-qQT3').click()
          
             })
        
            it('verifica mensagens validacao', () => {
                cy.contains('a', 'Register now').click();
                cy.contains('button', 'Register').click();
                cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
                cy.contains('button', 'Register').click();
                cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
                cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
                cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
            })
        
            it('verifica mensagens de email invalido', () => {
                cy.contains('a', 'Register now').click();
                cy.contains('button', 'Register').click();
                cy.get('input[formcontrolname="email"]').type('jacqueline');
                cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
             
            })
        
            it('verifica mensagens de senha com menos de 8 caracteres', () => {
                cy.contains('a', 'Register now').click();
                cy.contains('button', 'Register').click();
                cy.get('input[formcontrolname="password"]').type('123');
                cy.contains('button', 'Register').click();
                cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
             
            })
         
            it('fazer login de usuario valido', () => {
                cy.login('flavio', '123');
                cy.contains('a', '(Logout)').should('be.visible');
            })
        
            it('fazer login de usuario invalido', () => {
                cy.login('jacqueline', '1234');
                cy.on('window:alert', (str) => {
                    expect(str).to.equal('Invalid user name or password');
                })
            })
        
           
            const usuarios = require('../../fixtures/usuarios.json');
            usuarios.forEach(usuario => {
        
                it(`registra novo usuario ${usuario.userName} `, () => {
                    cy.contains('a', 'Register now').click();
                    cy.contains('button', 'Register').click();
                    cy.get('input[formcontrolname="email"]').type(usuario.email);
                    cy.get('input[formcontrolname="fullName"]').type(usuario.fullName);
                    cy.get('input[formcontrolname="userName"]').type(usuario.userName);
                    cy.get('input[formcontrolname="password"]').type(usuario.password);
                    cy.contains('button', 'Register').click();
                })
            });*/


})

var horario;
if( horario =>17:00 && horario<= 19:00)
System.out.println("bora beber")
else(horario >19:00)
System.out.println(" suave BB")

