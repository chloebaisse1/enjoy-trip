const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Disposition des colonnes de liens */}

        <div className="flex flex-wrap justify-center mb-12">
          {/* colonne liens utiles */}
          <div className="w-full md:w-1/3 xl:w-1/4 p-4">
            <h4 className="text-lg font-bold mb-4">Liens utiles</h4>
            <ul className="list-none">
              <li className="mb-2">
                <a
                  href="/accueil"
                  className="text-gray-300 hover:text-indigo-500"
                >
                  Accueil
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="destinations"
                  className="text-gray-300 hover:text-indigo-500"
                >
                  Destinations
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/services"
                  className="text-gray-300 hover:text-indigo-500"
                >
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/galerie"
                  className="text-gray-300 hover:text-indigo-500"
                >
                  Galerie
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/contact"
                  className="text-gray-300 hover:text-indigo-500"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* colonne Reseaux sociaux */}
          <div className="w-full md:w-1/3 xl:w-1/4 p-4">
            <h4 className="text-lg font-bold mb-4">Suivez-nous</h4>
            <ul className="list-none">
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-indigo-500">
                  Facebook
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-indigo-500">
                  Twitter
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-indigo-500">
                  Instagram
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-indigo-500">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          {/* colonne informations légales */}
          <div className="w-full md:w-1/3 xl:w-1/4 p-4">
            <h4 className="text-lg font-bold mb-4">Informations légales</h4>
            <ul className="list-none">
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-indigo-500">
                  CGU
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-indigo-500">
                  Mentions légales
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* section copyright */}
        <div className="text-center">
          <p className="text-gray-300 text-sm">
            &copy; 2025 Enjoy Trip. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
