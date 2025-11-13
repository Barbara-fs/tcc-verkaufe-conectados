


function irParaInicio() {
  window.location.href = 'index.html';
}

function irParaOpcoes() {
  window.location.href = 'opcoes.html';
}

function irParaVendas() {
  window.location.href = 'Vendas.html';
}


function irParaCashback() {
  window.location.href = 'cashback.html';
}

function irParaCadastro() {
  window.location.href = 'cadastro.html';
}

function irParaLeads() {
  window.location.href = 'leads.html';
}


function irParaPag() {
  window.location.href = 'pag.html';
}

function irParaPortifolio() {
  window.location.href = 'portifolio.html';
}

function irParaStatusDaVenda() {
  window.location.href = 'statusdavenda.html';
}

const Cadastro = document.getElementById('Cadastro.HTML');
Cadastro.innerHTML = 'output cadastro de clientes';

document.getElementById('excelFile').addEventListener('change', function (event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const data = e.target.result;
      document.getElementById('output').textContent = data;
    };
    reader.readAsText(file);
  }
})

function login() {
  const login = document.getElementById('login').value;
  const senha = document.getElementById('senha').value;

  if (!login || !senha) {
    alert('Favor preencher todos os campos!')
    return
  }

  window.location.href = 'opcoes.html';
}

function esqueciSenha() {
  const email = prompt("Qual e-mail do cadastro?");
  alert(`Um e-mail de redefinição de senha foi enviado para ${email}`);
}

function novoCadastro() {
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  if (!nome || !email || !senha) {
    alert('Favor preencher todos os campos!')
    return
  }

  alert('Cadastro realizado com sucesso!')
  window.location.href = 'index.html';
}