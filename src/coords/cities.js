import ff1 from '../img/1/1.png'
import ff2 from '../img/1/2.png'
import ff3 from '../img/1/3.png'
import ff4 from '../img/1/4.png'

const cities = [
    {
        text: 'Museu FF',
        coordinates: [ -16.903893395351496, 32.65149494768513],
        imgURL: [ff1, ff2, ff3, ff4],
        title: 'Museu Henrique e Francisco Franco'

    },
    {
        text: 'Museu do Açucar',
        coordinates: [-16.907017027716385, 32.648311559004235],
        imgURL: [ 'https://cultura.madeira.gov.pt/images/OutrosMuseus/MuseuAcucar2.jpg'],
        title: 'Museu A Cidade do Açúcar'
        
    },
    {
        text: 'Jardim Botanico',
        coordinates: [ -16.894732944151812, 32.66254156439047],
        imgURL: ['https://h8r3x6j3.rocketcdn.me/wp-content/uploads/2021/01/botanical-gardens-madeira-sunset-1.jpg','https://images.turismoenportugal.org/Jardim-Botanico-da-Madeira-Funchal.jpg', 'https://telefericojardimbotanico.com/wp-content/uploads/2016/02/shutterstock_419493172-1024x683.jpg', 'https://ifcn.madeira.gov.pt/images/JB/infoVisit/InfograficoJBM_Peq.jpg', 'https://img.freepik.com/premium-photo/botanical-garden-funchal-madeira-portugal_266870-6399.jpg', 'http://s3-eu-west-1.amazonaws.com/bestguide-images/p/post_images/images/000/028/220/original/J.Botanico9.jpg?1440098412'],
        title: 'Jardim Botânico da Madeira'
    },
    {
        text: 'Blandys Wine Lodge',
        coordinates: [  -16.910624726039863, 32.64787574755793],
        imgURL: ['https://www.blandyswinelodge.com/wp-content/uploads/2022/09/bwl-Prancheta-1.jpg','https://static.portugalbywine.com/media//MULTIMEDIA/FOTOS/4342/19055625085412p_1920.jpg','https://www.blandyswinelodge.com/wp-content/uploads/2022/09/bwl-Prancheta-5.jpg','https://www.blandyswinelodge.com/wp-content/uploads/2022/09/bwl-Prancheta-2.jpg','https://marshmallowtravels.com/wp-content/uploads/2017/04/IMG_0272-1-1170x550.jpg'],
        title: "Blandy's Wine Lodge"
    },
    {
        text: 'Ruinas de Sao Jorge',
        coordinates: [  -16.897686298163855, 32.829943827981865],
        imgURL: [ 'https://santanamadeirabiosfera.pt/images/Conhecer/Freguesias/Sao_Jorge/Portico_Calhau_de_S_Jorge_-_Duarte_Sousa.jpg','https://i.pinimg.com/originals/63/c6/3d/63c63dd2315e6446e8545cb548d8a43e.jpg'],
        title: 'Ruínas de São Jorge'
    },
    {
        text: 'Parque Tematico',
        coordinates: [  -16.88439591124723,32.8032877283233],
        imgURL: ['http://s3-eu-west-1.amazonaws.com/bestguide-images/p/post_images/images/000/028/531/original/Parque-Tematico.jpg?1440098833', 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/75/52/a4/casas-tipicas-de-santana.jpg?w=1200&h=-1&s=1','https://images.turismoenportugal.org/Parque-Tematico-da-Madeira.jpg'],
        title: 'Parque Temático da Madeira'
    },
    {
        text: 'Cristo Rei',
        coordinates: [-16.850579490542646, 32.63854322204222],
        imgURL: [ 'https://h8r3x6j3.rocketcdn.me/wp-content/uploads/2021/01/cristo-rei-sunrise-madeira-800x534.jpg','https://h8r3x6j3.rocketcdn.me/wp-content/uploads/2021/08/christ-statue-madeira-drone.jpg', 'https://h8r3x6j3.rocketcdn.me/wp-content/uploads/2021/08/cristo-rei-madeira-drone-800x500.jpg', 'https://h8r3x6j3.rocketcdn.me/wp-content/uploads/2021/08/benches-sunset-800x500.jpg', 'https://madeira.best/storage/uploads/img/cristo-rei-viewpoint-miradouro-gajarau-canio-madeira-45bf5783facb41.JPG'],
        title: 'Miradouro do Cristo Rei'
    },
    {
        text: 'Colegio dos Jesuitas',
        coordinates: [-16.90923651714468, 32.650222383939635],
        imgURL: [ 'https://cultura.madeira.gov.pt/images/OutrosMuseus/MuseuAcucar2.jpg'],
        title: 'Museu A Cidade do Açúcar'
    },
    {
        text: 'Cabo Girao',
        coordinates: [  -17.004332248643756, 32.65560776357376],
        imgURL: [ 'https://cultura.madeira.gov.pt/images/OutrosMuseus/MuseuAcucar2.jpg'],
        title: 'Museu A Cidade do Açúcar'
    },
    {
        text: 'Miradouro Eiro do Serrado',
        coordinates: [ -16.96553329994667, 32.71047170121687],
        imgURL: [ 'https://cultura.madeira.gov.pt/images/OutrosMuseus/MuseuAcucar2.jpg'],
        title: 'Museu A Cidade do Açúcar'
    },
    {
        text: 'Pico do Arieiro',
        coordinates: [-16.928891960936674,32.736242064990336],
        imgURL: [ 'https://cultura.madeira.gov.pt/images/OutrosMuseus/MuseuAcucar2.jpg'],
        title: 'Museu A Cidade do Açúcar'
    },
    {
        text: 'Capela do Corpo Santo',
        coordinates: [-16.900322834382155,32.649689400499085],
        imgURL: [ 'https://cultura.madeira.gov.pt/images/OutrosMuseus/MuseuAcucar2.jpg'],
        title: 'Museu A Cidade do Açúcar'
    },
    {
        text: 'Casas de Santana',
        coordinates: [-16.882610728836077, 32.80563542576975],
        imgURL: [ 'https://cultura.madeira.gov.pt/images/OutrosMuseus/MuseuAcucar2.jpg'],
        title: 'Museu A Cidade do Açúcar'
    },
    {
        text: 'Portas da Cidade',
        coordinates: [-16.906796917144778, 32.64772095671906],
        imgURL: [ 'https://cultura.madeira.gov.pt/images/OutrosMuseus/MuseuAcucar2.jpg'],
        title: 'Museu A Cidade do Açúcar'
    },    
    {
        text: 'Palacio de Sao Lourenco',
        coordinates: [-16.91004508645616,32.647380522432314],
        imgURL: [ 'https://cultura.madeira.gov.pt/images/OutrosMuseus/MuseuAcucar2.jpg'],
        title: 'Museu A Cidade do Açúcar'
    },
    {
        text: 'Pilar de Banger',
        coordinates: [-16.908616072964442, 32.64689432191945],
        imgURL: [ 'https://cultura.madeira.gov.pt/images/OutrosMuseus/MuseuAcucar2.jpg'],
        title: 'Museu A Cidade do Açúcar'
    },
    {
        text: 'Estatua Joao Gonçalves Zarco',
        coordinates: [-16.909741272964357,32.648173555667434],
        imgURL: [ 'https://cultura.madeira.gov.pt/images/OutrosMuseus/MuseuAcucar2.jpg'],
        title: 'Museu A Cidade do Açúcar'
    },
    {
        text: 'Camara Municipal de Santana',
        coordinates: [-16.882250215288973, 32.80558348910334],
        imgURL: [ 'https://cultura.madeira.gov.pt/images/OutrosMuseus/MuseuAcucar2.jpg'],
        title: 'Museu A Cidade do Açúcar'
    },{
        text: 'Camara Municipal do Funchal',
        coordinates: [-16.90806498465569, 32.650474200977136],
        imgURL: [ 'https://cultura.madeira.gov.pt/images/OutrosMuseus/MuseuAcucar2.jpg'],
        title: 'Museu A Cidade do Açúcar'
    },{
        text: 'Igreja da Sé',
        coordinates: [-16.90832551714482, 32.64822131771056],
        imgURL: [ 'https://cultura.madeira.gov.pt/images/OutrosMuseus/MuseuAcucar2.jpg'],
        title: 'Museu A Cidade do Açúcar'
    },{
        text: 'Levada dos Tornos',
        coordinates: [ -16.8459748846594, 32.67533603415975],
        imgURL: [ 'https://cultura.madeira.gov.pt/images/OutrosMuseus/MuseuAcucar2.jpg'],
        title: 'Museu A Cidade do Açúcar'
    },{
        text: 'Largo da Achada',
        coordinates: [-16.84548341677708, 32.67975709695652],
        imgURL: [ 'https://cultura.madeira.gov.pt/images/OutrosMuseus/MuseuAcucar2.jpg'],
        title: 'Museu A Cidade do Açúcar'
    },
    {
        text: 'Quinta do Santo ',
        coordinates: [ -16.817856370211647, 32.72621229336328],
        imgURL: [ 'https://cultura.madeira.gov.pt/images/OutrosMuseus/MuseuAcucar2.jpg'],
        title: 'Museu A Cidade do Açúcar'
    },
    {
        text: 'Miradouro do Pico do Facho',
        coordinates: [-16.75869229077785, 32.724084148935745],
        imgURL: [ 'https://cultura.madeira.gov.pt/images/OutrosMuseus/MuseuAcucar2.jpg'],
        title: 'Museu A Cidade do Açúcar'
    },
    {
        text: 'Igreja de Nossa Senhora da Conceição',
        coordinates: [-16.766106387053462, 32.7188316749214],
        imgURL: [ 'https://cultura.madeira.gov.pt/images/OutrosMuseus/MuseuAcucar2.jpg'],
        title: 'Museu A Cidade do Açúcar'
    },
    {
        text: 'Capela de Nossa Senhora da Piedade',
        coordinates: [-16.713269923481167, 32.74292647036701],
        imgURL: [ 'https://cultura.madeira.gov.pt/images/OutrosMuseus/MuseuAcucar2.jpg'],
        title: 'Museu A Cidade do Açúcar'
    },
    {
        text: 'Museu da Baleia',
        coordinates: [-16.74047684035708, 32.735885669641576],
        imgURL: [ 'https://cultura.madeira.gov.pt/images/OutrosMuseus/MuseuAcucar2.jpg'],
        title: 'Museu A Cidade do Açúcar'
    },
    {
        text: 'Furna Cave',
        coordinates: [ -16.69382834769262, 32.75063088651697],
        imgURL: [ 'https://cultura.madeira.gov.pt/images/OutrosMuseus/MuseuAcucar2.jpg'],
        title: 'Museu A Cidade do Açúcar'
    },
    {
        text: 'Praia do Faial',
        coordinates: [ -16.85001408002769, 32.792564811578735],
        imgURL: [ 'https://cultura.madeira.gov.pt/images/OutrosMuseus/MuseuAcucar2.jpg'],
        title: 'Museu A Cidade do Açúcar'
    },
    {
        text: 'Museu do Açucar',
        coordinates: [ -16.907069746006854, 32.64850512124363],
        imgURL: [ 'https://cultura.madeira.gov.pt/images/OutrosMuseus/MuseuAcucar2.jpg'],
        title: 'Museu A Cidade do Açúcar'
    },
    {
        text: 'Museu do Açucar',
        coordinates: [ -16.907069746006854, 32.64850512124363],
        imgURL: [ 'https://cultura.madeira.gov.pt/images/OutrosMuseus/MuseuAcucar2.jpg'],
        title: 'Museu A Cidade do Açúcar'
    },
    {
        text: 'Museu do Açucar',
        coordinates: [ -16.907069746006854, 32.64850512124363],
        imgURL: [ 'https://cultura.madeira.gov.pt/images/OutrosMuseus/MuseuAcucar2.jpg'],
        title: 'Museu A Cidade do Açúcar'
    },
    {
        text: 'Museu do Açucar',
        coordinates: [ -16.907069746006854, 32.64850512124363],
        imgURL: [ 'https://cultura.madeira.gov.pt/images/OutrosMuseus/MuseuAcucar2.jpg'],
        title: 'Museu A Cidade do Açúcar'
    },
    {
        text: 'Museu do Açucar',
        coordinates: [ -16.907069746006854, 32.64850512124363],
        imgURL: [ 'https://cultura.madeira.gov.pt/images/OutrosMuseus/MuseuAcucar2.jpg'],
        title: 'Museu A Cidade do Açúcar'
    },
    {
        text: 'Museu do Açucar',
        coordinates: [ -16.907069746006854, 32.64850512124363],
        imgURL: [ 'https://cultura.madeira.gov.pt/images/OutrosMuseus/MuseuAcucar2.jpg'],
        title: 'Museu A Cidade do Açúcar'
    },
    {
        text: 'Museu do Açucar',
        coordinates: [ -16.907069746006854, 32.64850512124363],
        imgURL: [ 'https://cultura.madeira.gov.pt/images/OutrosMuseus/MuseuAcucar2.jpg'],
        title: 'Museu A Cidade do Açúcar'
    },
    {
        text: 'Museu do Açucar',
        coordinates: [ -16.907069746006854, 32.64850512124363],
        imgURL: [ 'https://cultura.madeira.gov.pt/images/OutrosMuseus/MuseuAcucar2.jpg'],
        title: 'Museu A Cidade do Açúcar'
    },
    {
        text: 'Museu do Açucar',
        coordinates: [ -16.907069746006854, 32.64850512124363],
        imgURL: [ 'https://cultura.madeira.gov.pt/images/OutrosMuseus/MuseuAcucar2.jpg'],
        title: 'Museu A Cidade do Açúcar'
    },

    {
        text: 'Museu do Açucar',
        coordinates: [ -16.907069746006854, 32.64850512124363]
    },
    {
        text: 'Museu do Açucar',
        coordinates: [ -16.907069746006854, 32.64850512124363]
    },

    {
        text: 'Museu do Açucar',
        coordinates: [ -16.907069746006854, 32.64850512124363]
    },
    {
        text: 'Museu do Açucar',
        coordinates: [ -16.907069746006854, 32.64850512124363]
    },
    {
        text: 'Museu do Açucar',
        coordinates: [ -16.907069746006854, 32.64850512124363]
    },
    {
        text: 'Museu do Açucar',
        coordinates: [ -16.907069746006854, 32.64850512124363]
    },

];

export default cities;
