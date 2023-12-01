export default function Navbar(){

return (
<nav className="nav">
<a href="/CompanyHistory" className="site-title">Cortes selectos al vacío HM</a>
<ul>
<li className="active">
<a href="/CompanyHistory">Home</a>
</li>
<li className="active">
<a href="/Login">Inicio</a>
</li>
<li className="active">
    <a href="/ContactForm">Registro</a>
</li>
</ul>

</nav>
)
}