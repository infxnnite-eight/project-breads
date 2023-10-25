const React = require('react')
const Default = require('./layouts/default')

function Show ({bread, index}) {
    // Confirm we are getting our bread data in the terminal.
    // console.log(bread.name)
      return (
        <Default>
        
        <form action={`/breads/${index}?_method=PUT`} method="POST">
        <a href={`/breads/${index}/edit`}><button>Edit</button></a>

  <input type='submit' value="DELETE"/>


        <h3>{bread.name}</h3>
            <p>
                    and it
                    {
                            bread.hasGluten
      ?                 <span> does </span>
      :                 <span> does NOT </span>
                                                    }
                            have gluten.
            </p>
                        <img src={bread.image} alt={bread.name} />
                    <li><a href="/breads">Go home</a></li>
                    </form>
</Default>

      )
  }
  

module.exports = Show
