import React from 'react';
import './PostContent.scss';
import { HeartOutlined } from '@ant-design/icons';

const PostContent = (props) => {

    return (

        <section className="PostContentMain"> 

            <section className="PostMainLeft">


            </section>


            <section className="PostMainRight">


                        <div className="PostPhotoBox">

                            <img className="PhotoPost" src="/images/brochetas.jpg" alt=""/>

                        </div>

                    <section className="PostInfoBottom">

                        <div className="PostInfoFoot">

                            <div className="LikesBox">

                            <HeartOutlined className="HeartLike"/>

                            <p className="LikesCount">45</p>

                            </div>

                            <div className="RecipeBottom">

                                <a href="/#">RECIPE</a>

                            </div>

                        </div>

                    </section>

                    <section className="PostTitleBox">

                            <h3 className="PostTitle">Brochetas de Pollo con Salsa Cajún</h3>

                    </section>

                    <section className="RecipesDetails">

                            <div className="RecipeDet Duration">

                                <i class="far fa-clock"></i>
                                <p>30 MIN</p>

                            </div>

                            <div className="RecipeDet Dificult">

                            <i class="fas fa-mortar-pestle"></i>
                            <p>EASY</p>

                            </div>

                            <div className="RecipeDet Serves">

                            <i class="fas fa-utensils"></i>
                            <p>4 SERVES</p>

                            </div>

                    </section>

                    <section className="RecipeIntructions">

                        <div className="Ingredients">

                            <h3 className="HeaderRecipeIntructions"> INGREDIENTS</h3>

                        1 tbsp olive oil

                        1 onion

                        , finely chopped
                        2 garlic cloves, crushed
                        120g chorizo

                        , diced
                        2 x 400g cans chopped tomatoes
                        1 tsp caster sugar
                        600g fresh gnocchi

                        125g mozzarella ball, cut into chunks
                        small bunch of basil

                        , torn
                        green salad, to serve


                        </div>

                        <div className="Method">

                        <h3 className="HeaderRecipeIntructions"> METHOD</h3>

                        Heat the oil in a medium pan over a medium heat. 
                        Fry the onion and garlic for 8-10 mins until soft. Add the chorizo and fry for 5 mins more. 
                        Tip in the tomatoes and sugar, and season. Bring to a simmer, then add the gnocchi and cook for 8 mins, 
                        stirring often, until soft. Heat the grill to high.

                        Stir ¾ of the mozzarella and most of the basil through the gnocchi. Divide the mixture 
                        between six ovenproof ramekins, or put in one baking dish. Top with the remaining mozzarella, 
                        then grill for 3 mins, or until the cheese is melted and golden. Season, scatter over the remaining basil 
                        and serve with green salad.


                        </div>

                    </section>


            </section>


        </section>
    )
}

export default PostContent;