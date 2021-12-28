import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
const IndexPage = () => {
  return (
 <Layout pageTitle="Den harmoniska kroppen">
<StaticImage
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="../images/walk.jpg"
/>
    
<h3>Innehåll</h3>
<ul>
<li>Vi möts</li>
<li>Att andas</li>
<li>Att sitta</li>
<li>Att stå</li>
<li>Att använda rösten</li>
<li>Att gå - Pisksnärten - Vågen - Innan vi skiljs</li>
</ul>

      
  
    </Layout>
  )
}
export default IndexPage
