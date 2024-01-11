import React from 'react';
import "../styles/style.css";

<>
    <div id="header">
        <div class="container">
            <nav>
                <img src="images/logo png mehdi red.png" class="logo">
                <ul id="sidemenu">
                    <li><a href="#header">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <i class="fa-solid fa-xmark" onclick="closeMenu()"></i>
                </ul>
                <i class="fa-solid fa-bars" onclick="openMenu()"></i>
            </nav>
            <div class="header-text">
                <p>Développeur Web Et Web Mobile</p>
                <h1>Salut, Je M'appel <span>Mehdi</span> <br>AKAMI j'habite à Paris</h1>
            </div>
        </div>

    </div>
    <!-- ---------------about------------ -->
    <div id="about">
        <div class="container">
            <div class="row">
                <div class="about-col-1">
                    <img src="images/logo web dev.png">
                </div>
                <div class="about-col-2">
                    <h1 class="sub-title">À propos de moi</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, error recusandae sit debitis
                        maxime placeat doloribus temporibus itaque. Nulla aliquid a repellat voluptates labore tenetur,
                        quibusdam officia modi laborum? Animi.</p>
                    <div class="tab-titles">
                        <p class="tab-links active-link" onclick="opentab('compétences')">Compétences</p>
                        <p class="tab-links" onclick="opentab('expériences')">Expériences</p>
                        <p class="tab-links" onclick="opentab('formations')">Formations</p>
                    </div>
                    <div class="tab-contents active-tab" id="compétences">
                        <ul>
                            <li><span>UI/UX</span><br>Design Web/ App interface</li>
                            <li><span>Front-End</span><br>Css Js React</li>
                            <li><span>Back-End</span><br>Node.js Php</li>

                        </ul>
                    </div>
                    <div class="tab-contents" id="expériences">
                        <ul>
                            <li><span>2020 - 2023</span><br>Technicien supérieur itinérant de Distributeurs Automatiques
                                (boisson chaud et friandise)MENDS - LONGJUMEAU</li>

                            <li><span>2017 - 2020</span><br>Technicien itinérant de Distributeurs
                                Automatiques (boisson chaud et friandise) NEOCORNER - Asnières-sur-Seine</li>
                            <li><span>2014</span><br>Technicien atelier de Distributeurs
                                Automatiques (boisson chaud et friandise) EUROVENDING - Rabat</li>

                        </ul>
                    </div>
                    <div class="tab-contents" id="formations">
                        <ul>
                            <li><span>2023 - Présent</span><br>Master en Génie Logiciel et
                                Multimédia</li>
                            <li><span>2023 - Présent</span><br>Titre Professionnel N 5 RNCP
                                en Développement Web Et Web Mobile </li>
                            <li><span>2017</span><br>Licence professionnelle en Electrohydraulique Université de LONGWY
                                – LORRAINE</li>

                        </ul>
                    </div>



                </div>
            </div>
        </div>
    </div>
    <!-----------------services---------------------->

    <div id="services">
        <div class="container">
            <h1 class="sub-title">Mes services</h1>
            <div class="services-list">
                <div>
                    <i class="fa-solid fa-code"></i>
                    <h2>Web Developpement</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, odit quas culpa
                        voluptate ea voluptatem cum impedit! Nostrum reiciendis provident alias maxime voluptas
                        doloremque aspernatur unde esse. Ad, reprehenderit repellendus?</p>
                    <a href="#" class="btn">En savoir plus</a>
                </div>
                <div>
                    <i class="fa-solid fa-display"></i>
                    <h2>Front-End</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, odit quas culpa
                        voluptate ea voluptatem cum impedit! Nostrum reiciendis provident alias maxime voluptas
                        doloremque aspernatur unde esse. Ad, reprehenderit repellendus?</p>
                    <a href="#" class="btn">En savoir plus</a>
                </div>
                <div>
                    <i class="fa-solid fa-server"></i>
                    <h2>Back-End</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, odit quas culpa
                        voluptate ea voluptatem cum impedit! Nostrum reiciendis provident alias maxime voluptas
                        doloremque aspernatur unde esse. Ad, reprehenderit repellendus?</p>
                    <a href="#" class="btn">En savoir plus</a>
                </div>
            </div>
        </div>

        <!-- -----------Portfolio-------------- -->
        <div id="portfolio">
            <div class="container">
                <h1 class="sub-title">Mon Travail</h1>
                <div class="work-list">
                    <div class="work">
                        <img src="images/logo web dev.png">
                        <div class="layer">
                            <h3>Social Media App</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repudiandae totam ab
                                expedita, quo quos minima sit numquam maxime, dolores vel quam eaque, ad ut alias
                                consequuntur accusantium ratione ducimus?</p>
                            <a href="#"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>

                    </div>
                    <div class="work">
                        <img src="images/logo web dev.png">
                        <div class="layer">
                            <h3>Site interactif</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repudiandae totam ab
                                expedita, quo quos minima sit numquam maxime, dolores vel quam eaque, ad ut alias
                                consequuntur accusantium ratione ducimus?</p>
                            <a href="#"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>

                    </div>
                    <div class="work">
                        <img src="images/logo web dev.png">
                        <div class="layer">
                            <h3>Online Shoping App</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repudiandae totam ab
                                expedita, quo quos minima sit numquam maxime, dolores vel quam eaque, ad ut alias
                                consequuntur accusantium ratione ducimus?</p>
                            <a href="#"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>

                    </div>
                    <div class="work">
                        <img src="images/logo web dev.png">
                        <div class="layer">
                            <h3>Music App</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repudiandae totam ab
                                expedita, quo quos minima sit numquam maxime, dolores vel quam eaque, ad ut alias
                                consequuntur accusantium ratione ducimus?</p>
                            <a href="#"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>

                    </div>
                </div>
                <a href="#" class="btn"> Voir Plus</a>
            </div>
        </div>
        <!-- <-----------------------contact----------------->
        <div id="contact">
            <div class="container">
                <div class="row">
                    <div class="contact-left">
                        <h1 class="sub-title">Contactez-moi</h1>
                        <p><i class="fa-solid fa-paper-plane"></i> akamimehdi.dev@gmail.com</p>
                        <p><i class="fa-solid fa-square-phone"></i> +33 6 99 85 80 05</p>
                        <div class="social-icons">
                            <a href="https://www.linkedin.com/in/mehdi-akami-1912a51a9"><i
                                    class="fa-brands fa-linkedin"></i></a>
                            <a href="https://github.com/akamidev/123"><i class="fa-brands fa-github"></i></i></a>
                            <a href="https://twitter.com/home"><i class="fa-brands fa-twitter"></i></a>
                            <a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>
                            <a href="https://www.facebook.com/"><i class="fa-brands fa-facebook"></i></a>
                        </div>
                        <a href="images/CV-Mehdi-AKAMI-.pdf" class="btn btn2">Téléchargez Mon CV</a>
                    </div>
                    <div class="contact-right">
                        <form name="submit-to-google-sheet">
                            <input name="name" type="text" placeholder="Votre Nom" required>
                            <input name="email" type="email" placeholder="Votre E-mail" required>
                            <textarea name="message" placeholder="Votre Message" rows="6" required></textarea>
                            <button type="submit" class="btn btn2">Submit</button>

                        </form>
                        <span id="msg"></span>
                    </div>

                </div>

            </div>
            <footer>
                <div class="Copyright">
                    <p>
                        Copyright &copy; 2023
                        <a href="mailto:akamimehdi.dev@gmail.com">
                            akamimehdi.dev@gmail.com
                        </a>
                        . Tous droits réservés.
                        <a href="#header" class="scroll-to-top"><i class="fa-solid fa-arrow-up"></i></a>
                    </p>
                </div>

            </footer>

            <script>

                var tablinks = document.getElementsByClassName("tab-links");
                var tabcontents = document.getElementsByClassName("tab-contents");

                function opentab(tabname) {
                    for (tablink of tablinks) {
                        tablink.classList.remove("active-link");
                    }
                    for (tabcontent of tabcontents) {
                        tabcontent.classList.remove("active-tab");
                    }
                    event.currentTarget.classList.add("active-link");
                    document.getElementById(tabname).classList.add("active-tab");

                }
                console.log(tablinks);         
            </script>
            <script>
                var sidemenu = document.getElementById("sidemenu");
                function openMenu() {
                    sidemenu.style.right = "0";
                }
                function closeMenu() {
                    sidemenu.style.right = "-200px";
                }
            </script>

            <script>
                const scriptURL = 'https://script.google.com/macros/s/AKfycbzVRN_z9I7-XjQWgBS2GtI-9fC73NPWR1RyF_q2v9YkxHhAW8qwBic4iF6BE6Rn0Ffl/exec'
                const form = document.forms['submit-to-google-sheet']

                const msg = document.getElementById('msg')

                form.addEventListener('submit', e => {
                    e.preventDefault()
                    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                        .then(response => {
                            msg.innerHTML = "Message envoyé avec succès !"
                            setTimeout(function () {
                                msg.innerHTML = ""
                            }, 5000)
                            form.reset()
                        })
                        .catch(error => console.error('Error!', error.message))
                })

            </script>
</>