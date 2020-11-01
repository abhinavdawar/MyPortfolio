import mmmm from '../../assets/projects_images/chatapp.JPG'
import COVID from '../../assets/projects_images/COVID.jpg'
import Dev_talks from '../../assets/projects_images/Dev_talks.jpg'

const data_projects = [
    {
        name: 'PDF downloader',
        image: COVID,
        deployed_url: 'https://github.com/abhinavdawar/pdfDrive',
        github_url: 'https://github.com/abhinavdawar/pdfDrive',
        category: ['puppeteer']
    },

    {
        name: 'React-Photoshop-Clone',
        image: Dev_talks,
        deployed_url: 'https://abhinavdawar-react-photoshop.netlify.app/',
        github_url: 'https://https://github.com/abhinavdawar/React-Photoshop-Clone',
        category: [ 'react.js']
    },

    {
        name: 'Windows Media Player with Calculator',
        image: mmmm,
        deployed_url: 'https://github.com/abhinavdawar/mediaCal',
        github_url: 'https://github.com/abhinavdawar/mediaCal',
        category: ['java']
    }
]

export default data_projects;