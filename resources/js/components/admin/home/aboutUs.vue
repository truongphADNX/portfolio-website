<script setup>
    import Base from '../layouts/base.vue'
</script>
<template>
 <Base />
 <!--==================== MAIN ====================-->
        <main class="main">
            <!-- Side Nav Dummy-->
            <div class="main__sideNav"></div>
            <!-- End Side Nav -->
            <!-- Main Content -->
            <div class="main__content">
                <!-- ==================-->
                <!-- Overview Page -->

            <!--==================== ABOUT ====================-->
            <section class="about section" id="about">
                <div class="about_container">
                    <div class="titlebar">
                        <div class="titlebar_item">
                            <h1>About Us</h1>
                        </div>
                        <div class="titlebar_item">
                            <div class="btn btn-secondary">
                                Save Changes
                            </div>
                        </div> 
                    </div>
                    <div class="card_wrapper">
                        <div class="wrapper_left">
                            <div class="card">
                                <p>Full Name</p>
                                <input type="text" class="input" />

                                <p>Email</p>
                                <input type="email" class="input" />

                                <p>Phone</p>
                                <input type="text" class="input" />

                                <p>Address</p>
                                <input type="text" class="input" />
        
                                <p>Description</p>
                                <textarea cols="10" rows="5"  ></textarea>
                                    
                            </div>
                            <div class="card">
                                <p>Tagline</p>
                                <input type="text" class="input" />     
                            </div>
                        </div>
                        
                        <div class="wrapper_right ">
                            <div class="card">
                                <div class="avatar_profile">
                                 <img src="/assets/img/avatar.jpg" alt="" class="avatar_profile_img">
                                </div>
                                <input type="file" id="fileimg" />   
                            </div>
                            <div class="card">
                                <p>CV</p>
                                <input type="file" id="filecv" />    
                            </div>     
                        </div>
                        
                    </div>
                    <div class="titlebar">
                        <div class="titlebar_item">
                            
                        </div>
                        <div class="titlebar_item">
                            <div class="btn btn-secondary">
                                Save Changes
                            </div>
                        </div> 
                    </div>
                </div>
            </section>
            
            <!--==================== SKILLS ====================-->
            <section class="skills section" id="skills">

            </section>

            <!--==================== QUALIFICATION ====================-->
            <section class="qualification section">

            </section>

            <!--==================== SERVICES ====================-->
            <section class="services section" id="services">
                
            </section>

            <!--==================== PORTFOLIO ====================-->
            <section class="portfolio section" id="portfolio">
                
            </section>

            <!--==================== PROJECT IN MIND ====================-->
            <section class="project section">

            </section>

            <!--==================== TESTIMONIAL ====================-->
            <section class="testimonial section">
                
            </section>

            <!--==================== CONTACT ME ====================-->
            <section class="contact section" id="contact">

            </section>
            </div>
        </main>
</template>
    