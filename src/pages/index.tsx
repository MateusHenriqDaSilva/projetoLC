import Layout from '../components/template/Layout'

const pedidosExemplo = [{
  id: 1,
  valorVenda: 300,
  marktplace: 'Mercado Livre',
  Desconto: 0
}, {
  id: 2,
  valorVenda: 1200,
  marktplace: 'Amazon',
  Desconto: 0
},
]

export default function Home() {
  return (
    <Layout titulo="Página Inicial" subtitulo="Estamos construindo um template Admin!">
      <h3>Pedidos</h3>
      <div className='espacoDeConteudo' style={{ marginTop: '10px', height: '700px', width: '1200px', background: 'white', color: 'black', borderRadius: '20px' }}>
        {pedidosExemplo.map((elemento, key) => {
          return (
            <ul key={key} className='listaDePedidos' style={{ marginTop: '10px', height: '40px', width: '1200px', display: 'flex', background: '#e0f5ff', borderRadius: '10px'}}>
              <li style={{ textAlign: 'center', marginTop: '10px', marginLeft: '10px', fontSize: '18px', color: 'black' }}>Id: {elemento.id}</li>
              <li style={{ textAlign: 'center', marginTop: '10px', marginLeft: '10px', fontSize: '18px', color: 'black' }}>Valor da Venda: {elemento.valorVenda}</li>
              <li style={{ textAlign: 'center', marginTop: '10px', marginLeft: '10px', fontSize: '18px', color: 'black' }}>Marktplace: {elemento.marktplace}</li>
              <li style={{ textAlign: 'center', marginTop: '10px', marginLeft: '10px', fontSize: '18px', color: 'black' }}>Desconto: {elemento.Desconto}</li>
            </ul>
          )
        })}
      </div>
    </Layout>
  )
}
