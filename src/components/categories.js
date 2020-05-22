import { h } from "preact";
import { connect } from "redux-bundler-preact";

export default connect(
  "selectCategories",
  "doFetchCategories",
  ({ categories, doFetchCategories }) => 
  
    categories.length ? (
      categories.map(({ categories: { name } }) => <div>{name}</div>)
    ) : (
      <button onClick={doFetchCategories}>Get Categories</button>
    )
)
