

$("#btnGeraros").on('click', function () {
   
    app.dialog.alert('Reconheceu a pagina');
   document.getElementById('ordem_nomecliente').innerHTML = document.getElementById('nomecliente').value;
  
     document.getElementById('ordem_email').innerHTML = document.getElementById('email').value;
      document.getElementById('ordem_telefone').innerHTML = document.getElementById('telefone').value;
      document.getElementById('ordem_cpf_cnpj').innerHTML = document.getElementById('cpf_cnpj').value;
      document.getElementById('ordem_identidade').innerHTML = document.getElementById('identidade').value;
      document.getElementById('ordem_endereco').innerHTML = document.getElementById('endereco').value;
      document.getElementById('ordem_dado_aparelho').innerHTML = document.getElementById('dado_aparelho').value;
      document.getElementById('ordem_defeito').innerHTML = document.getElementById('defeito').value;
      document.getElementById('ordem_analise_tecnica').innerHTML = document.getElementById('analise_tecnica').value;
      document.getElementById('ordem_total').innerHTML = parseFloat(document.getElementById('total').value).toLocaleString('pt-br', { minimumFractionDigits: 2 });
      document.getElementById('ordem_data').innerHTML = dataAtual();

      const printer = cordova.plugins.printer;
      const pg = document.getElementById('vaip');

      // Imprimir o conteúdo HTML
      printer.print(pg, {
        name: 'Minha Página HTML',
        type: 'html'
      });
      //cordova.plugins.printer.print('vaip');
     // console.log();
    // Create jsPDF Document
    //var doc = new jsPDF('p', 'mm', [165.3, 287.85]);
    //doc.text('Sample Text', 15, 80);
     //    $("nomecliente").append(Text);
    // Print jsPDF Document
   // printJSPDF.printPDF(doc.output(), 'DYMO LabelWriter 450 Turbo', 165.3, 287.85, function (d) {
     //   console.log(d)
   // });
});

function dataAtual() {
    let data = new Date();
    return data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
  }
  
  /*const printer = cordova.plugins.printer;

  function printPage() {
    // Obter o conteúdo HTML da página atual
    const pti = document.getElementById("vaip");
    
    // Imprimir o conteúdo HTML
    printer.print(pti, {
        
      name: 'Editor de Ordem Serviço',
      type: 'html'
    });
    
    console.log();
  }*/