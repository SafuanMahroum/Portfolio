const projectPages = {
    illustrations: `
        <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-0">

            <div class="w-full h-full">
                <img src="images/affiche_f1alonso.webp"
                     class="w-full h-full object-cover">
            </div>

            <div class="w-full h-full">
                <img src="images/affiche_toyotasupragt.webp"
                     class="w-full h-full object-cover">
            </div>

            <div class="w-full h-full">
                <img src="images/affiche_pingpong.webp"
                     class="w-full h-full object-cover">
            </div>

            <div class="w-full h-full">
                <img src="images/affiche_frida.webp"
                     class="w-full h-full object-cover">
            </div>

            <div class="w-full h-full">
                <img src="images/affiche_f22raptor.webp"
                     class="w-full h-full object-cover">
            </div>

            <div class="w-full h-full">
                <img src="images/affiche_calufa.webp"
                     class="w-full h-full object-cover">
            </div>
            
            <div class="w-full h-full">
                <img src="images/etiquette_calufa1.webp"
                     class="w-full h-full object-cover">
            </div>

            <div class="w-full h-full">
                <img src="images/etiquette_calufa2.webp"
                     class="w-full h-full object-cover">
            </div>

            <div class="w-full h-full">
                <img src="images/etiquette_calufa3.webp"
                     class="w-full h-full object-cover">
            </div>

            <div class="w-full h-full">
                <img src="images/web_calufa2.webp"
                     class="w-full h-full object-cover">
            </div>

            <div class="w-full h-full">
                <img src="images/affiche_driveexpo1.webp"
                     class="w-full h-full object-cover">
            </div>

            <div class="w-full h-full">
                <img src="images/affiche_driveexpo2.webp"
                     class="w-full h-full object-cover">
            </div>

            <div class="w-full h-full">
                <img src="images/mockup_driveexpo3.webp"
                     class="w-full h-full object-cover">
            </div>

            <div class="w-full h-full">
                <img src="images/mockup_driveexpo4.webp"
                     class="w-full h-full object-cover">
            </div>

            <div class="w-full h-full">
                <img src="images/livret_missionpossible1.webp"
                     class="w-full h-full object-cover">
            </div>

            <div class="w-full h-full">
                <img src="images/livret_missionpossible2.webp"
                     class="w-full h-full object-cover">
            </div>
        </div>

        <!-- FOOTER NAVIGATION -->
        <div class="px-6 lg:px-12 pt-12 border-t border-white/5 pointer-events-auto">
            <div class="flex flex-col sm:flex-row justify-between items-center sm:items-center gap-8 sm:gap-0 pt-4">

                <!-- Projet Précédent (invisible mais garde la place) -->
                <div class="opacity-0 pointer-events-none flex items-center gap-3 select-none">

                    <span class="iconify"
                          data-icon="lucide:arrow-left"
                          data-width="16"></span>

                    <div>
                        <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-1">
                            Projet Précédent
                        </span>
                        <span class="text-base sm:text-lg text-white font-medium">
                            Aucun
                        </span>
                    </div>
                </div>

                <!-- Projet Suivant -->
                <a class="group text-right pointer-events-auto cursor-pointer flex items-center gap-3"
                   onclick="loadProject('missionpossible')">

                    <div>
                        <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-1 group-hover:text-rose-500 transition-colors">
                            Projet Suivant
                        </span>
                        <span class="text-base sm:text-lg text-white font-medium">
                            Mission Possible
                        </span>
                    </div>

                    <span class="iconify transition-transform group-hover:translate-x-1"
                          data-icon="lucide:arrow-right"
                          data-width="16"></span>
                </a>
            </div>
        </div>
`,

    missionpossible: `
<div class="flex-1 relative scroll-smooth bg-neutral-900/30">

    <!-- Project Details Container -->
    <div class="w-full max-w-[1600px] mx-auto">

        <!-- Hero Image Area -->
        <div class="relative w-full h-[60vh] lg:h-[70vh] group">
            <img src="images/affiche_mission.webp"
            class="w-full h-full object-cover"
            style="object-position: center 30%;" />

            <div class="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent"></div>

            <div class="absolute bottom-0 left-0 w-full p-6 lg:p-12">
                <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                    <div class="max-w-3xl">

                        <!-- Badges -->
                        <div class="flex items-center gap-3 mb-4">
                            <span
                                class="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white border border-white/20 rounded-full glass-panel">
                                2026
                            </span>
                            <span
                                class="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-rose-400 border border-rose-500/20 bg-rose-500/10 rounded-full">
                                Identité Visuelle
                            </span>
                        </div>

                        <!-- Title -->
                        <h1 class="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tighter text-white mb-4 leading-[1.1]">
                            Mission Possible
                        </h1>

                        <!-- Description -->
                        <p class="text-base sm:text-lg text-neutral-300 font-light max-w-xl leading-relaxed">
                            Une identité visuelle complète inspirée du cinéma d’espionnage : logo, livret, 
                            affiche et un court‑métrage au style résolument action pour présenter la formation MMI.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Content Body -->
        <div class="px-6 lg:px-12 py-12 lg:py-16">

            <!-- Stats Grid -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 border-b border-white/5 pb-12">
                <div>
                    <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-2">Projet</span>
                    <span class="text-base text-white font-medium">Mission Possible</span>
                </div>
                <div>
                    <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-2">Rôle</span>
                    <span class="text-base text-white font-medium">Direction du tournage,  Monteur vidéo, Co‑écriture narrative</span>
                </div>
                <div>
                    <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-2">Contexte</span>
                    <span class="text-base text-white font-medium">BUT MMI • Concours "Je filme ma formation"</span>
                </div>
                <div>
                    <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-2">Outils</span>
                    <span class="text-base text-white font-medium">Premiere Pro, After Effects, Photoshop, Illustrator, InDesign</span>
                </div>
            </div>

            <div class="grid lg:grid-cols-12 gap-12">

                <!-- Left Column (Sticky) -->
                <div class="lg:col-span-4 lg:sticky lg:top-24 h-fit">
                    <h3 class="text-2xl font-semibold text-white tracking-tight mb-6">L'Approche</h3>

                    <div class="prose prose-invert prose-sm text-neutral-400 leading-relaxed space-y-4">
                        <p>
                            L’objectif était de créer une identité visuelle pour participer au concours « Je filme ma formation », 
                            avec une direction artistique forte et immersive inspirée des films d’espionnage.
                        </p>

                        <p>
                            J’ai travaillé sur la Direction Artistique en créant le logo, ces variantes, la scénarisation et
                            le montage de la vidéo pour donner une personnalité unique au projet.
                        </p>
                        <p>
                           Livret, affiches et logo ont été pensés pour former un ensemble cohérent, adapté aux formats print.
                        </p>
                    </div>

                    <div class="mt-8 pt-8 border-t border-white/5">
                        <h4 class="text-sm font-semibold text-white mb-4">Outils Utilisés</h4>
                        <div class="flex flex-wrap gap-2">
                            <span class="px-3 py-1.5 text-xs text-neutral-300 bg-white/5 border border-white/5 rounded-md">
                                Premiere Pro
                            </span>
                            <span class="px-3 py-1.5 text-xs text-neutral-300 bg-white/5 border border-white/5 rounded-md">
                                After Effects
                            </span>
                            <span class="px-3 py-1.5 text-xs text-neutral-300 bg-white/5 border border-white/5 rounded-md">
                                Illustrator
                            </span>
                            <span class="px-3 py-1.5 text-xs text-neutral-300 bg-white/5 border border-white/5 rounded-md">
                                Photoshop
                            </span>
                            <span class="px-3 py-1.5 text-xs text-neutral-300 bg-white/5 border border-white/5 rounded-md">
                                InDesign
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Right Column (Images) -->
                <div class="lg:col-span-8 space-y-6">

                    <div class="relative group rounded-lg overflow-hidden border border-white/5 shadow-sm">
                        <img src="images/logo_missionpossible.webp"
                             class="w-full h-auto object-cover opacity-100 transition-opacity duration-500">
                    </div>

                    <div class="relative group rounded-lg overflow-hidden border border-white/5 shadow-sm">
                        <img src="images/cg_missionpossible.webp"
                             class="w-full h-auto object-cover opacity-100 transition-opacity duration-500">
                    </div>

                    <div class="grid sm:grid-cols-2 gap-6">
                        <div class="relative group rounded-lg overflow-hidden border border-white/5 shadow-sm aspect-[4/5]">
                            <img src="images/livret_missionpossible1.webp"
                                 class="w-full h-full object-cover opacity-100 transition-opacity duration-500">
                        </div>
                        <div class="relative group rounded-lg overflow-hidden border border-white/5 shadow-sm aspect-[4/5]">
                            <img src="images/livret_missionpossible2.webp"
                                 class="w-full h-full object-cover opacity-100 transition-opacity duration-500">
                        </div>
                    </div>

                    <div class="relative group rounded-lg overflow-hidden border border-white/5 shadow-sm">
                        <img src="images/affiche_mission.webp"
                             class="w-full h-auto object-cover opacity-100 transition-opacity duration-500">
                    </div>

                    <div class="grid sm:grid-cols-2 gap-6">
                        <video autoplay loop muted playsinline preload="none" loading="lazy"
                               class="w-full h-full object-cover opacity-100 transition-opacity duration-500">
                            <source src="images/videomissionp.mp4" type="video/mp4">
                        </video>
                        <div class="relative group rounded-lg overflow-hidden border border-white/5 shadow-sm aspect-[4/5]">
                            <img src="images/frame_missionpossible.webp"
                                 class="w-full h-full object-cover opacity-100 transition-opacity duration-500">
                        </div>
                    </div>
                </div>
            </div>

            <!-- Call To Action: Vidéo / Bande-annonce -->
            <div class="mt-20 text-center space-y-6 relative z-20">

                <p class="text-neutral-200 text-sm tracking-widest uppercase">
                    Découvrez le projet en vidéo
                </p>

                <div class="mt-12 md:mt-16 text-center
                            flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">

                    <a onclick="loadProject('videomissionp')"
                       class="inline-flex items-center justify-center px-6 py-3 sm:px-7 sm:py-3.5
                              text-xs sm:text-sm font-medium uppercase tracking-widest
                              text-neutral-200 bg-[#221f1a] border border-[#e5e7eb]/40 rounded-full
                              hover:border-[#e5e7eb] hover:text-white transition-colors cursor-pointer">
                        Vidéo complète
                    </a>

                    <a onclick="loadProject('bandemissionp')"
                       class="inline-flex items-center justify-center px-6 py-3 sm:px-7 sm:py-3.5
                              text-xs sm:text-sm font-medium uppercase tracking-widest
                              text-neutral-200 bg-[#221f1a] border border-[#e5e7eb]/40 rounded-full
                              hover:border-[#e5e7eb] hover:text-white transition-colors cursor-pointer">
                        Bande-annonce
                    </a>
                </div>
            </div>

            <div class="mt-24 pt-12 border-t border-white/5 pointer-events-auto">
                <div class="flex flex-col sm:flex-row justify-between items-center sm:items-center gap-8 sm:gap-0">

                    <!-- Projet Précédent -->
                    <a class="group text-left pointer-events-auto cursor-pointer flex items-center gap-3"
                       onclick="loadProject('illustrations')">

                        <!-- Flèche gauche -->
                        <span class="iconify transition-transform group-hover:-translate-x-1"
                              data-icon="lucide:arrow-left"
                              data-width="16"></span>

                        <div>
                            <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-1 group-hover:text-rose-500 transition-colors">
                                Projet Précédent
                            </span>
                            <span class="text-base sm:text-lg text-white font-medium">
                                Illustrations
                            </span>
                        </div>
                    </a>

                    <!-- Projet Suivant -->
                    <a class="group text-right pointer-events-auto cursor-pointer flex items-center gap-3"
                       onclick="loadProject('calufa')">

                        <div>
                            <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-1 group-hover:text-rose-500 transition-colors">
                                Projet Suivant
                            </span>
                            <span class="text-base sm:text-lg text-white font-medium">
                                CALUFA
                            </span>
                        </div>

                        <!-- Flèche droite -->
                        <span class="iconify transition-transform group-hover:translate-x-1"
                              data-icon="lucide:arrow-right"
                              data-width="16"></span>
                    </a>

                </div>
            </div>
        </div>
    </div>
</div>
`,

    calufa: `
<div class="flex-1 relative scroll-smooth bg-neutral-900/30">

    <!-- Project Details Container -->
    <div class="w-full max-w-[1600px] mx-auto">

        <!-- Hero Image Area -->
        <div class="relative w-full h-[60vh] lg:h-[70vh] group">
        <img src="images/banner_calufa.webp"
            class="w-full h-full object-cover object-[center_70%]" />

            <div class="radar-wrapper absolute top-6 right-6 lg:top-8 lg:right-8 flex gap-3 z-10">
                <a href="https://but1.mmi-iutsf.org/S2/2025/calufa/index.php?route=accueil" target="_blank" rel="noopener noreferrer">
                    <button id="calufa-site-btn"
                        class="h-10 px-5 flex items-center gap-2 rounded-full bg-rose-600 text-white text-sm font-semibold hover:bg-rose-500 transition-colors shadow-lg shadow-rose-900/20">
                        <span>Voir le site</span>
                        <iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
                    </button>
                </a>
            </div>

            <div class="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent"></div>

            <div class="absolute bottom-0 left-0 w-full p-6 lg:p-12">
                <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                    <div class="max-w-3xl">

                        <!-- Badges -->
                        <div class="flex items-center gap-3 mb-4">
                            <span
                                class="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white border border-white/20 rounded-full glass-panel">
                                2025
                            </span>
                            <span
                                class="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-rose-400 border border-rose-500/20 bg-rose-500/10 rounded-full">
                                Identité Visuelle
                            </span>
                        </div>

                        <!-- Title -->
                        <h1 class="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tighter text-white mb-4 leading-[1.1]">
                            CALUFA
                        </h1>

                        <!-- Description -->
                        <p class="text-base sm:text-lg text-neutral-300 font-light max-w-xl leading-relaxed">
                            Qué CALUFA ! La marque de bière qui rafraîchit à chaque gorgée, même sous les plus fortes vagues de chaleur.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Content Body -->
        <div class="px-6 lg:px-12 py-12 lg:py-16">

            <!-- Stats Grid -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 border-b border-white/5 pb-12">
                <div>
                    <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-2">Projet</span>
                    <span class="text-base text-white font-medium">Créer une marque de bière</span>
                </div>
                <div>
                    <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-2">Rôle</span>
                    <span class="text-base text-white font-medium">Graphiste, Développeur Front/Back-end</span>
                </div>
                <div>
                    <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-2">Contexte</span>
                    <span class="text-base text-white font-medium">BUT MMI • Projet d’étude</span>
                </div>
                <div>
                    <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-2">Outils</span>
                    <span class="text-base text-white font-medium">Illustrator, Photoshop</span>
                </div>
            </div>

            <div class="grid lg:grid-cols-12 gap-12">

                <!-- Left Column (Sticky) -->
                <div class="lg:col-span-4 lg:sticky lg:top-24 h-fit">

                    <h3 class="text-2xl font-semibold text-white tracking-tight mb-6">L'Approche</h3>

                    <div class="prose prose-invert prose-sm text-neutral-400 leading-relaxed space-y-4">
                        <p>
                            CALUFA est une marque de bière artisanale portoricaine pensée pour rafraîchir à chaque gorgée.
                            Son nom vient de l’expression espagnole « ¡Qué calufa! »,
                            signifiant « Quelle chaleur ! ».
                        </p>

                        <p>
                            Au sein de l’équipe, j’ai conçu l’identité visuelle et réalisé les principaux supports : 
                            étiquettes, mockups, contenus réseaux sociaux et site web.
                        </p>

                        <p>
                            L’ensemble du projet forme un univers expressif et rafraîchissant, pensé pour renforcer
                            l’image de marque et son impact auprès du public.
                        </p>
                    </div>

                    <div class="mt-8 pt-8 border-t border-white/5">
                        <h4 class="text-sm font-semibold text-white mb-4">Outils Utilisés</h4>
                        <div class="flex flex-wrap gap-2">
                            <span class="px-3 py-1.5 text-xs text-neutral-300 bg-white/5 border border-white/5 rounded-md">
                                Illustrator
                            </span>
                            <span class="px-3 py-1.5 text-xs text-neutral-300 bg-white/5 border border-white/5 rounded-md">
                                Photoshop
                            </span>
                            <span class="px-3 py-1.5 text-xs text-neutral-300 bg-white/5 border border-white/5 rounded-md">
                                Premiere Pro
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Right Column (Images) -->
                <div class="lg:col-span-8 space-y-6">
                    <div class="relative group rounded-lg overflow-hidden border border-white/5 shadow-sm">
                        <img src="images/etiquette_calufa3.webp"
                             class="w-full h-auto object-cover opacity-100 transition-opacity duration-500">
                    </div>

                    <div class="relative group rounded-lg overflow-hidden border border-white/5 shadow-sm">
                        <img src="images/etiquette_calufa1.webp"
                             class="w-full h-auto object-cover opacity-100 transition-opacity duration-500">
                    </div>

                    <div class="relative group rounded-lg overflow-hidden border border-white/5 shadow-sm">
                        <img src="images/etiquette_calufa2.webp"
                             class="w-full h-auto object-cover opacity-100 transition-opacity duration-500">
                    </div>

                    <div class="relative group rounded-lg overflow-hidden border border-white/5 shadow-sm">
                        <img src="images/web_calufa.webp"
                             class="w-full h-auto object-cover opacity-100 transition-opacity duration-500">
                    </div>

                    <div class="relative group rounded-lg overflow-hidden border border-white/5 shadow-sm">
                        <img src="images/web_calufa2.webp"
                             class="w-full h-auto object-cover opacity-100 transition-opacity duration-500">
                    </div>

                    <div class="relative group rounded-lg overflow-hidden border border-white/5 shadow-sm">
                        <img src="images/insta_calufa.webp"
                             class="w-full h-auto object-cover opacity-100 transition-opacity duration-500">
                    </div>

                </div>
            </div>

            <!-- Footer Navigation -->
            <div class="mt-24 pt-12 border-t border-white/5 pointer-events-auto">
                <div class="flex flex-col sm:flex-row justify-between items-center sm:items-center gap-8 sm:gap-0">

                    <!-- Projet Précédent -->
                    <a class="group text-left pointer-events-auto cursor-pointer flex items-center gap-3"
                       onclick="loadProject('missionpossible')">

                        <span class="iconify transition-transform group-hover:-translate-x-1"
                              data-icon="lucide:arrow-left"
                              data-width="16"></span>

                        <div>
                            <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-1 group-hover:text-rose-500 transition-colors">
                                Projet Précédent
                            </span>
                            <span class="text-base sm:text-lg text-white font-medium">
                                Mission Possible
                            </span>
                        </div>
                    </a>

                    <!-- Projet Suivant -->
                    <a class="group text-right pointer-events-auto cursor-pointer flex items-center gap-3"
                       onclick="loadProject('edrive')">

                        <div>
                            <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-1 group-hover:text-rose-500 transition-colors">
                                Projet Suivant
                            </span>
                            <span class="text-base sm:text-lg text-white font-medium">
                                E‑Drive Expo
                            </span>
                        </div>

                        <span class="iconify transition-transform group-hover:translate-x-1"
                              data-icon="lucide:arrow-right"
                              data-width="16"></span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
`,

    edrive: `
<div class="flex-1 relative scroll-smooth bg-neutral-900/30">

    <!-- Project Details Container -->
    <div class="w-full max-w-[1600px] mx-auto">

        <!-- Hero Image Area -->
        <div class="relative w-full h-[60vh] lg:h-[70vh] group">
        <img src="images/affiche_driveexpo1.webp"
             class="w-full h-full object-cover object-[center_3%]" />

            <div class="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent"></div>

            <div class="absolute bottom-0 left-0 w-full p-6 lg:p-12">
                <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                    <div class="max-w-3xl">

                        <!-- Badges -->
                        <div class="flex items-center gap-3 mb-4">
                            <span
                                class="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white border border-white/20 rounded-full glass-panel">
                                2025
                            </span>
                            <span
                                class="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-rose-400 border border-rose-500/20 bg-rose-500/10 rounded-full">
                                Identité Visuelle
                            </span>
                        </div>

                        <!-- Title -->
                        <h1 class="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tighter text-white mb-4 leading-[1.1]">
                            E‑Drive Expo
                        </h1>

                        <!-- Description -->
                        <p class="text-base sm:text-lg text-neutral-300 font-light max-w-xl leading-relaxed">
                            E‑Drive Expo, le festival automobile électrique où innovation et écologie prennent la route.
                    </div>
                </div>
            </div>
        </div>

        <!-- Content Body -->
        <div class="px-6 lg:px-12 py-12 lg:py-16">

            <!-- Stats Grid -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 border-b border-white/5 pb-12">
                <div>
                    <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-2">Projet</span>
                    <span class="text-base text-white font-medium">E‑Drive Expo</span>
                </div>
                <div>
                    <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-2">Rôle</span>
                    <span class="text-base text-white font-medium">Infographiste, Graphiste</span>
                </div>
                <div>
                    <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-2">Contexte</span>
                    <span class="text-base text-white font-medium">BUT MMI</span>
                </div>
                <div>
                    <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-2">Outils</span>
                    <span class="text-base text-white font-medium">Photoshop, Illustrator, InDesign</span>
                </div>
            </div>

            <div class="grid lg:grid-cols-12 gap-12">

                <!-- Left Column (Sticky) -->
                <div class="lg:col-span-4 lg:sticky lg:top-24 h-fit">

                    <h3 class="text-2xl font-semibold text-white tracking-tight mb-6">L'Approche</h3>

                    <div class="prose prose-invert prose-sm text-neutral-400 leading-relaxed space-y-4">
                        <p>
                            L’objectif était d’imaginer un festival autour des voitures électriques pour faire découvrir
                            au public les innovations qui protègent l’environnement.
                        </p>
                    
                        <p>
                            J’ai conçu l’identité visuelle complète du projet : direction artistique,
                            supports de communication, mockups, goodies et éléments de signalétique, dans un univers mêlant
                            écologie, innovation et esthétique vintage.
                        </p>
                    
                        <p>
                            Le festival réunit expositions, courses sur <em>Gran Turismo</em> et conférences, formant une
                            expérience cohérente et accessible.
                        </p>
                    </div>

                    <div class="mt-8 pt-8 border-t border-white/5">
                        <h4 class="text-sm font-semibold text-white mb-4">Outils Utilisés</h4>
                        <div class="flex flex-wrap gap-2">
                            <span class="px-3 py-1.5 text-xs text-neutral-300 bg-white/5 border border-white/5 rounded-md">
                                Photoshop
                            </span>
                            <span class="px-3 py-1.5 text-xs text-neutral-300 bg-white/5 border border-white/5 rounded-md">
                                Illustrator
                            </span>
                            <span class="px-3 py-1.5 text-xs text-neutral-300 bg-white/5 border border-white/5 rounded-md">
                                InDesign
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Right Column (Images) -->
                <div class="lg:col-span-8 space-y-6">

                    <div class="relative group rounded-lg overflow-hidden border border-white/5 shadow-sm">
                        <img src="images/cg_edriveexpo.webp"
                             class="w-full h-auto object-cover opacity-100 transition-opacity duration-500">
                    </div>

                    <div class="grid sm:grid-cols-2 gap-6">
                        <div class="relative group rounded-lg overflow-hidden border border-white/5 shadow-sm aspect-[297/420]">
                            <img src="images/mockup_driveexpo1.webp"
                                 class="w-full h-full object-cover opacity-100 transition-opacity duration-500">
                        </div>

                        <div class="relative group rounded-lg overflow-hidden border border-white/5 shadow-sm aspect-[297/420]">
                            <img src="images/mockup_driveexpo2.webp"
                                 class="w-full h-full object-cover opacity-100 transition-opacity duration-500">
                        </div>
                    </div>

                    <div class="relative group rounded-lg overflow-hidden border border-white/5 shadow-sm">
                        <img src="images/mockup_driveexpo3.webp"
                             class="w-full h-auto object-cover opacity-100 transition-opacity duration-500">
                    </div>

                    <div class="relative group rounded-lg overflow-hidden border border-white/5 shadow-sm">
                        <img src="images/mockup_driveexpo4.webp"
                             class="w-full h-auto object-cover opacity-100 transition-opacity duration-500">
                    </div>

                    <div class="grid sm:grid-cols-2 gap-6">
                        <div class="relative group rounded-lg overflow-hidden border border-white/5 shadow-sm aspect-[5/5]">
                            <img src="images/mockup_driveexpo5.webp"
                                 class="w-full h-full object-cover opacity-100 transition-opacity duration-500">
                        </div>

                        <div class="relative group rounded-lg overflow-hidden border border-white/5 shadow-sm aspect-[5/5]">
                            <img src="images/mockup_driveexpo6.webp"
                                 class="w-full h-full object-cover opacity-100 transition-opacity duration-500">
                        </div>
                    </div>

                    <div class="grid sm:grid-cols-2 gap-6">
                        <div class="relative group rounded-lg overflow-hidden border border-white/5 shadow-sm aspect-[5/5]">
                            <img src="images/mockup_driveexpo7.webp"
                                 class="w-full h-full object-cover opacity-100 transition-opacity duration-500">
                        </div>

                        <div class="relative group rounded-lg overflow-hidden border border-white/5 shadow-sm aspect-[5/5]">
                            <img src="images/mockup_driveexpo8.webp"
                                 class="w-full h-full object-cover opacity-100 transition-opacity duration-500">
                        </div>
                    </div>
                </div>
            </div>

            <!-- Footer Navigation -->
            <div class="mt-24 pt-12 border-t border-white/5 pointer-events-auto">
                <div class="flex flex-col sm:flex-row justify-between items-center sm:items-center gap-8 sm:gap-0">

                    <!-- Projet Précédent -->
                    <a class="group text-left pointer-events-auto cursor-pointer flex items-center gap-3"
                       onclick="loadProject('calufa')">

                        <span class="iconify transition-transform group-hover:-translate-x-1"
                              data-icon="lucide:arrow-left"
                              data-width="16"></span>

                        <div>
                            <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-1 group-hover:text-rose-500 transition-colors">
                                Projet Précédent
                            </span>
                            <span class="text-base sm:text-lg text-white font-medium">
                                CALUFA
                            </span>
                        </div>
                    </a>

                    <!-- Projet Suivant -->
                    <a class="group text-right pointer-events-auto cursor-pointer flex items-center gap-3"
                       onclick="loadProject('ijt')">

                        <div>
                            <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-1 group-hover:text-rose-500 transition-colors">
                                Projet Suivant
                            </span>
                            <span class="text-base sm:text-lg text-white font-medium">
                                Inclusion des Jeunes au Travail
                            </span>
                        </div>

                        <span class="iconify transition-transform group-hover:translate-x-1"
                              data-icon="lucide:arrow-right"
                              data-width="16"></span>
                    </a>

                </div>
            </div>
        </div>
    </div>
</div>
`,

    ijt: `
<div class="flex-1 relative scroll-smooth bg-neutral-900/30">

    <!-- Project Details Container -->
    <div class="w-full max-w-[1600px] mx-auto">

        <!-- Hero Image Area -->
        <div class="relative w-full h-[60vh] lg:h-[70vh] group overflow-hidden">
            <img src="images/web_ijt.webp"
                 class="w-full h-full object-cover scale-[1.11] origin-center" />

            <div class="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent"></div>

            <div class="absolute bottom-0 left-0 w-full p-6 lg:p-12">
                <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                    <div class="max-w-3xl">

                        <!-- Badges -->
                        <div class="flex items-center gap-3 mb-4">
                            <span
                                class="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white border border-white/20 rounded-full glass-panel">
                                2025
                            </span>
                            <span
                                class="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-rose-400 border border-rose-500/20 bg-rose-500/10 rounded-full">
                                Identité Visuelle
                            </span>
                        </div>

                        <!-- Title -->
                        <h1 class="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tighter text-white mb-4 leading-[1.1]">
                            Inclusion des Jeunes au Travail
                        </h1>

                        <!-- Description -->
                        <p class="text-base sm:text-lg text-neutral-300 font-light max-w-xl leading-relaxed">
                            L’association IJT, engagée pour l’inclusion et l’accès à l’emploi des jeunes
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Content Body -->
        <div class="px-6 lg:px-12 py-12 lg:py-16">

            <!-- Stats Grid -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 border-b border-white/5 pb-12">
                <div>
                    <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-2">Projet</span>
                    <span class="text-base text-white font-medium">Créer une association</span>
                </div>
                <div>
                    <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-2">Rôle</span>
                    <span class="text-base text-white font-medium">Graphiste, Monteur vidéo, Développeur front-end</span>
                </div>
                <div>
                    <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-2">Contexte</span>
                    <span class="text-base text-white font-medium">BUT MMI • Projet d’étude</span>
                </div>
                <div>
                    <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-2">Outils</span>
                    <span class="text-base text-white font-medium">Illustrator, Premiere Pro, HTML, CSS</span>
                </div>
            </div>

            <div class="grid lg:grid-cols-12 gap-12">

                <!-- Left Column (Sticky) -->
                <div class="lg:col-span-4 lg:sticky lg:top-24 h-fit">

                    <h3 class="text-2xl font-semibold text-white tracking-tight mb-6">L'Approche</h3>

                    <div class="prose prose-invert prose-sm text-neutral-400 leading-relaxed space-y-4">
                        <p>
                            Pour IJT, tu as développé une identité visuelle centrée sur la clarté, la structure et la
                            lisibilité. L’objectif était de créer un univers graphique professionnel, moderne et facilement
                            déclinable sur différents supports.
                        </p>
                        <p>
                            Tu as travaillé sur une direction artistique sobre mais impactante, avec un système typographique
                            précis, des compositions équilibrées et une hiérarchie visuelle forte. Le projet reflète ton sens
                            du détail, ta maîtrise des outils graphiques et ta capacité à créer des identités cohérentes.
                        </p>
                    </div>

                    <div class="mt-8 pt-8 border-t border-white/5">
                        <h4 class="text-sm font-semibold text-white mb-4">Outils Utilisés</h4>
                        <div class="flex flex-wrap gap-2">
                            <span class="px-3 py-1.5 text-xs text-neutral-300 bg-white/5 border border-white/5 rounded-md">
                                Illustrator
                            </span>
                            <span class="px-3 py-1.5 text-xs text-neutral-300 bg-white/5 border border-white/5 rounded-md">
                                Premiere Pro
                            </span>
                            <span class="px-3 py-1.5 text-xs text-neutral-300 bg-white/5 border border-white/5 rounded-md">
                                HTML, CSS
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Right Column (Images) -->
                <div class="lg:col-span-8 space-y-6">

                    <div class="relative group rounded-lg overflow-hidden border border-white/5 shadow-sm">
                        <img src="images/cg_ijt1.webp"
                             class="w-full h-auto object-cover opacity-100 transition-opacity duration-500">
                    </div>

                    <div class="relative group rounded-lg overflow-hidden border border-white/5 shadow-sm">
                        <img src="images/cg_ijt2.webp"
                             class="w-full h-auto object-cover opacity-100 transition-opacity duration-500">
                    </div>

                    <div class="relative group rounded-lg overflow-hidden border border-white/5 shadow-sm">
                        <img src="images/cg_ijt3.webp"
                             class="w-full h-auto object-cover opacity-100 transition-opacity duration-500">
                    </div>

                    <div class="relative group rounded-lg overflow-hidden border border-white/5 shadow-sm">
                        <img src="images/web_ijt.webp"
                             class="w-full h-auto object-cover opacity-100 transition-opacity duration-500">
                    </div>

                    <div class="relative group rounded-lg overflow-hidden border border-white/5 shadow-sm">
                        <video autoplay loop muted playsinline preload="none" loading="lazy"
                               class="w-full h-auto object-cover">
                            <source src="images/sensibilisationijt.mp4" type="video/mp4">
                        </video>
                    </div>
                </div>
            </div>

            <!-- Call To Action: Vidéo -->
            <div class="mt-20 mb-20 text-center space-y-6">
                <p class="text-neutral-400 text-sm tracking-widest uppercase">
                    Découvrez la vidéo de sensibilisation
                </p>
                <div class="mt-12 md:mt-16 text-center
                            flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                    <a onclick="loadProject('sensibilisationijt')"
                       class="inline-flex items-center justify-center px-6 py-3 sm:px-7 sm:py-3.5
                              text-xs sm:text-sm font-medium uppercase tracking-widest
                              text-neutral-200 bg-[#221f1a] border border-[#e5e7eb]/40 rounded-full
                              hover:border-[#e5e7eb] hover:text-white transition-colors cursor-pointer">
                        Vidéo de sensibilisation
                    </a>
                </div>
            </div>

            <!-- Footer Navigation -->
            <div class="mt-24 pt-12 border-t border-white/5 pointer-events-auto">
                <div class="flex flex-col sm:flex-row justify-between items-center sm:items-center gap-8 sm:gap-0">

                    <!-- Projet Précédent -->
                    <a class="group text-left pointer-events-auto cursor-pointer flex items-center gap-3"
                       onclick="loadProject('edrive')">

                        <span class="iconify transition-transform group-hover:-translate-x-1"
                              data-icon="lucide:arrow-left"
                              data-width="16"></span>

                        <div>
                            <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-1 group-hover:text-rose-500 transition-colors">
                                Projet Précédent
                            </span>
                            <span class="text-base sm:text-lg text-white font-medium">
                                E‑Drive Expo
                            </span>
                        </div>
                    </a>

                    <!-- Projet Suivant -->
                    <a class="group text-right pointer-events-auto cursor-pointer flex items-center gap-3"
                       onclick="loadProject('videomissionp')">

                        <div>
                            <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-1 group-hover:text-rose-500 transition-colors">
                                Projet Suivant
                            </span>
                            <span class="text-base sm:text-lg text-white font-medium">
                                Mission Possible – Vidéo
                            </span>
                        </div>

                        <span class="iconify transition-transform group-hover:translate-x-1"
                              data-icon="lucide:arrow-right"
                              data-width="16"></span>
                    </a>

                </div>
            </div>
        </div>
    </div>
</div>
`,

    videomissionp: `
<div class="flex-1 relative scroll-smooth bg-neutral-900/30 pb-8">

    <!-- Project Details Container -->
    <div class="w-full max-w-[1600px] mx-auto pb-12">

        <!-- Hero Image Area -->
        <div class="relative w-full h-[60vh] lg:h-[70vh] group">
            <video autoplay loop muted playsinline preload="none"
                   class="w-full h-full object-cover">
                <source src="images/videomissionp.mp4" type="video/mp4">
            </video>

            <div class="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent"></div>

            <div class="absolute bottom-0 left-0 w-full p-6 lg:p-12">
                <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                    <div class="max-w-3xl">

                        <!-- Badges -->
                        <div class="flex items-center gap-3 mb-4">
                            <span
                                class="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white border border-white/20 rounded-full glass-panel">
                                2026
                            </span>
                            <span
                                class="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-rose-400 border border-rose-500/20 bg-rose-500/10 rounded-full">
                                Court-métrage
                            </span>
                        </div>

                        <!-- Title -->
                        <h1 class="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tighter text-white mb-4 leading-[1.1]">
                            Mission Possible
                        </h1>

                        <!-- Description -->
                        <p class="text-base sm:text-lg text-neutral-300 font-light max-w-xl leading-relaxed">
                            Vidéo réalisée pour le concours « Je filme ma formation », où le BUT MMI
                            est présenté dans un pur style d’agent secret. Cette mission sera‑t‑elle possible ?
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Content Body -->
        <div class="px-6 lg:px-12 pt-12">

            <!-- Stats Grid -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 border-b border-white/5 pb-12">
                <div>
                    <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-2">Projet</span>
                    <span class="text-base text-white font-medium">Je filme ma formation</span>
                </div>
                <div>
                    <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-2">Rôle</span>
                    <span class="text-base text-white font-medium">Direction du tournage, Monteur vidéo</span>
                </div>
                <div>
                    <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-2">Contexte</span>
                    <span class="text-base text-white font-medium">BUT MMI • Concours</span>
                </div>
                <div>
                    <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-2">Outils</span>
                    <span class="text-base text-white font-medium">Premiere Pro, After Effects</span>
                </div>
            </div>

        </div>

        <!-- Fullscreen Video (NO PADDING) -->
        <div class="w-full aspect-video">
            <iframe
                id="mission-video"
                data-yt-player="true"
                class="w-full h-full"
                src="https://www.youtube.com/embed/cJLLEqCipl4?enablejsapi=1&rel=0&modestbranding=1&controls=1&mute=0"
                title="Mission Possible Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        </div>

        <!-- Call To Action: Vidéo / Bande-annonce -->
        <div class="mt-20 mb-20 text-center space-y-6 relative z-20">
        
            <p class="text-neutral-400 text-sm tracking-widest uppercase">
                Découvrez la bande-annonce
            </p>
        
            <div class="mt-12 md:mt-16 text-center
                        flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <a onclick="loadProject('bandemissionp')"
                   class="inline-flex items-center justify-center px-6 py-3 sm:px-7 sm:py-3.5
                          text-xs sm:text-sm font-medium uppercase tracking-widest
                          text-neutral-200 bg-[#221f1a] border border-[#e5e7eb]/40 rounded-full
                          hover:border-[#e5e7eb] hover:text-white transition-colors cursor-pointer">
                    Bande-annonce
                </a>
            </div>
        </div>

        <!-- Footer Navigation -->
        <div class="px-6 lg:px-12 pt-12 border-t border-white/5 pointer-events-auto">
            <div class="flex flex-col sm:flex-row justify-between items-center sm:items-center gap-8 sm:gap-0 pt-4">

                <!-- Projet Précédent -->
                <a class="group text-left pointer-events-auto cursor-pointer flex items-center gap-3"
                   onclick="loadProject('ijt')">

                    <span class="iconify transition-transform group-hover:-translate-x-1"
                          data-icon="lucide:arrow-left"
                          data-width="16"></span>

                    <div>
                        <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-1 group-hover:text-rose-500 transition-colors">
                            Projet Précédent
                        </span>
                        <span class="text-base sm:text-lg text-white font-medium">
                            Inclusion des Jeunes au Travail
                        </span>
                    </div>
                </a>

                <!-- Projet Suivant -->
                <a class="group text-right pointer-events-auto cursor-pointer flex items-center gap-3"
                   onclick="loadProject('bandemissionp')">

                    <div>
                        <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-1 group-hover:text-rose-500 transition-colors">
                            Projet Suivant
                        </span>
                        <span class="text-base sm:text-lg text-white font-medium">
                            Mission Possible – BA
                        </span>
                    </div>

                    <span class="iconify transition-transform group-hover:translate-x-1"
                          data-icon="lucide:arrow-right"
                          data-width="16"></span>
                </a>

            </div>
        </div>
    </div>
</div>
`,

    bandemissionp: `
<div class="flex-1 relative scroll-smooth bg-neutral-900/30 pb-8">

    <!-- Project Details Container -->
    <div class="w-full max-w-[1600px] mx-auto pb-12">

        <!-- Hero Image Area -->
        <div class="relative w-full h-[60vh] lg:h-[70vh] group">
            <video autoplay loop muted playsinline preload="none"
                   class="w-full h-full object-cover">
                <source src="images/bandemissionp.mp4" type="video/mp4">
            </video>

            <div class="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent"></div>

            <div class="absolute bottom-0 left-0 w-full p-6 lg:p-12">
                <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                    <div class="max-w-3xl">

                        <!-- Badges -->
                        <div class="flex items-center gap-3 mb-4">
                            <span
                                class="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white border border-white/20 rounded-full glass-panel">
                                2026
                            </span>
                            <span
                                class="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-rose-400 border border-rose-500/20 bg-rose-500/10 rounded-full">
                                Bande‑annonce
                            </span>
                        </div>

                        <!-- Title -->
                        <h1 class="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tighter text-white mb-4 leading-[1.1]">
                            Mission Possible
                        </h1>

                        <!-- Description -->
                        <p class="text-base sm:text-lg text-neutral-300 font-light max-w-xl leading-relaxed">
                            Bande‑annonce réalisée personnellement, mettant en scène le 
                            BUT MMI dans un univers d’espionnage rythmé et immersif.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Content Body -->
        <div class="px-6 lg:px-12 pt-12">

            <!-- Stats Grid -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 border-b border-white/5 pb-12">
                <div>
                    <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-2">Projet</span>
                    <span class="text-base text-white font-medium">Aperçu du projet Mission Possible</span>
                </div>
                <div>
                    <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-2">Rôle</span>
                    <span class="text-base text-white font-medium">Direction du tournage, Monteur vidéo</span>
                </div>
                <div>
                    <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-2">Contexte</span>
                    <span class="text-base text-white font-medium">Projet personnel</span>
                </div>
                <div>
                    <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-2">Outils</span>
                    <span class="text-base text-white font-medium">Premiere Pro, After Effects</span>
                </div>
            </div>

        </div>

        <!-- Fullscreen Video (NO PADDING) -->
        <div class="w-full aspect-video">
            <iframe
                id="mission-video"
                data-yt-player="true"
                class="w-full h-full"
                src="https://www.youtube.com/embed/YqXMrFlvo8U?enablejsapi=1&rel=0&modestbranding=1&controls=1&mute=0"
                title="Mission Impossible Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        </div>

        <!-- Call To Action: Vidéo -->
        <div class="mt-20 mb-20 text-center space-y-6 relative z-20">
        
            <p class="text-neutral-400 text-sm tracking-widest uppercase">
                Découvrez la mission
            </p>
        
            <div class="mt-12 md:mt-16 text-center
                        flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <a onclick="loadProject('videomissionp')"
                   class="inline-flex items-center justify-center px-6 py-3 sm:px-7 sm:py-3.5
                          text-xs sm:text-sm font-medium uppercase tracking-widest
                          text-neutral-200 bg-[#221f1a] border border-[#e5e7eb]/40 rounded-full
                          hover:border-[#e5e7eb] hover:text-white transition-colors cursor-pointer">
                    Vidéo complète
                </a>
            </div>
        </div>

        <!-- Footer Navigation -->
        <div class="px-6 lg:px-12 pt-12 border-t border-white/5 pointer-events-auto">
            <div class="flex flex-col sm:flex-row justify-between items-center sm:items-center gap-8 sm:gap-0 pt-4">

                <!-- Projet Précédent -->
                <a class="group text-left pointer-events-auto cursor-pointer flex items-center gap-3"
                   onclick="loadProject('videomissionp')">

                    <span class="iconify transition-transform group-hover:-translate-x-1"
                          data-icon="lucide:arrow-left"
                          data-width="16"></span>

                    <div>
                        <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-1 group-hover:text-rose-500 transition-colors">
                            Projet Précédent
                        </span>
                        <span class="text-base sm:text-lg text-white font-medium">
                            Mission Possible – Vidéo
                        </span>
                    </div>
                </a>

                <!-- Projet Suivant -->
                <a class="group text-right pointer-events-auto cursor-pointer flex items-center gap-3"
                   onclick="loadProject('interviewgoat')">

                    <div>
                        <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-1 group-hover:text-rose-500 transition-colors">
                            Projet Suivant
                        </span>
                        <span class="text-base sm:text-lg text-white font-medium">
                            Qui est le GOAT ?
                        </span>
                    </div>

                    <span class="iconify transition-transform group-hover:translate-x-1"
                          data-icon="lucide:arrow-right"
                          data-width="16"></span>
                </a>

            </div>
        </div>
    </div>
</div>
`,

    interviewgoat: `
<div class="flex-1 relative scroll-smooth bg-neutral-900/30 pb-8">

    <!-- Project Details Container -->
    <div class="w-full max-w-[1600px] mx-auto pb-12">

        <!-- Hero Image Area -->
        <div class="relative w-full h-[60vh] lg:h-[70vh] group">
            <video autoplay loop muted playsinline preload="none"
                   class="w-full h-full object-cover">
                <source src="images/interviewgoat.mp4" type="video/mp4">
            </video>

            <div class="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent"></div>

            <div class="absolute bottom-0 left-0 w-full p-6 lg:p-12">
                <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                    <div class="max-w-3xl">

                        <!-- Badges -->
                        <div class="flex items-center gap-3 mb-4">
                            <span
                                class="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white border border-white/20 rounded-full glass-panel">
                                2026
                            </span>
                            <span
                                class="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-rose-400 border border-rose-500/20 bg-rose-500/10 rounded-full">
                                Interview
                            </span>
                        </div>

                        <!-- Title -->
                        <h1 class="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tighter text-white mb-4 leading-[1.1]">
                            Qui est le GOAT ?
                        </h1>

                        <!-- Description -->
                        <p class="text-base sm:text-lg text-neutral-300 font-light max-w-xl leading-relaxed">
                            Une interview dynamique où le FAN n°1 débat pour déterminer qui est réellement le GOAT du basketball.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Content Body -->
        <div class="px-6 lg:px-12 pt-12">

            <!-- Stats Grid -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 border-b border-white/5 pb-12">
                <div>
                    <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-2">Projet</span>
                    <span class="text-base text-white font-medium">Filmer une interview</span>
                </div>
                <div>
                    <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-2">Rôle</span>
                    <span class="text-base text-white font-medium">Monteur vidéo</span>
                </div>
                <div>
                    <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-2">Contexte</span>
                    <span class="text-base text-white font-medium">BUT MMI</span>
                </div>
                <div>
                    <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-2">Outils</span>
                    <span class="text-base text-white font-medium">Premiere Pro, Photoshop</span>
                </div>
            </div>

        </div>

        <!-- Fullscreen Video (NO PADDING) -->
        <div class="w-full aspect-video">
            <iframe
                id="goat-video"
                data-yt-player="true"
                class="w-full h-full"
                src="https://www.youtube.com/embed/WwRvsXP8ISg?enablejsapi=1&rel=0&modestbranding=1&controls=1&mute=0"
                title="Qui est le GOAT ? — Interview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        </div>

        <!-- Footer Navigation -->
        <div class="px-6 lg:px-12 pt-12 border-t border-white/5 pointer-events-auto">
            <div class="flex flex-col sm:flex-row justify-between items-center sm:items-center gap-8 sm:gap-0 pt-4">

                <!-- Projet Précédent -->
                <a class="group text-left pointer-events-auto cursor-pointer flex items-center gap-3"
                   onclick="loadProject('bandemissionp')">

                    <span class="iconify transition-transform group-hover:-translate-x-1"
                          data-icon="lucide:arrow-left"
                          data-width="16"></span>

                    <div>
                        <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-1 group-hover:text-rose-500 transition-colors">
                            Projet Précédent
                        </span>
                        <span class="text-base sm:text-lg text-white font-medium">
                            Mission Possible – BA
                        </span>
                    </div>
                </a>

                <!-- Projet Suivant -->
                <a class="group text-right pointer-events-auto cursor-pointer flex items-center gap-3"
                   onclick="loadProject('badmoment')">

                    <div>
                        <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-1 group-hover:text-rose-500 transition-colors">
                            Projet Suivant
                        </span>
                        <span class="text-base sm:text-lg text-white font-medium">
                            BAD MOMENT
                        </span>
                    </div>

                    <span class="iconify transition-transform group-hover:translate-x-1"
                          data-icon="lucide:arrow-right"
                          data-width="16"></span>
                </a>

            </div>
        </div>
    </div>
</div>
`,

    badmoment: `
<div class="flex-1 relative scroll-smooth bg-neutral-900/30 pb-8">

    <!-- Project Details Container -->
    <div class="w-full max-w-[1600px] mx-auto pb-12">

        <!-- Hero Image Area -->
        <div class="relative w-full h-[60vh] lg:h-[70vh] group">
            <video autoplay loop muted playsinline preload="none"
                   class="w-full h-full object-cover">
                <source src="images/badmoment.mp4" type="video/mp4">
            </video>

            <div class="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent"></div>

            <div class="absolute bottom-0 left-0 w-full p-6 lg:p-12">
                <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                    <div class="max-w-3xl">

                        <!-- Badges -->
                        <div class="flex items-center gap-3 mb-4">
                            <span
                                class="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white border border-white/20 rounded-full glass-panel">
                                2025
                            </span>
                            <span
                                class="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-rose-400 border border-rose-500/20 bg-rose-500/10 rounded-full">
                                Clip
                            </span>
                        </div>

                        <!-- Title -->
                        <h1 class="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tighter text-white mb-4 leading-[1.1]">
                            BAD MOMENT
                        </h1>

                        <!-- Description -->
                        <p class="text-base sm:text-lg text-neutral-300 font-light max-w-xl leading-relaxed">
                            Clip musical sombre et bleuté, explorant l’histoire d’un enchaînement de mauvaises 
                            décisions qui mène notre protagoniste au mauvais endroit, au mauvais moment.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Content Body -->
        <div class="px-6 lg:px-12 pt-12">

            <!-- Stats Grid -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 border-b border-white/5 pb-12">
                <div>
                    <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-2">Projet</span>
                    <span class="text-base text-white font-medium">Filmer un clip musical</span>
                </div>
                <div>
                    <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-2">Rôle</span>
                    <span class="text-base text-white font-medium">Direction du tournage, Co-directeur narrative, Monteur vidéo</span>
                </div>
                <div>
                    <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-2">Contexte</span>
                    <span class="text-base text-white font-medium">BUT MMI</span>
                </div>
                <div>
                    <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-2">Outils</span>
                    <span class="text-base text-white font-medium">Premiere Pro</span>
                </div>
            </div>

        </div>

        <!-- Fullscreen Video (NO PADDING) -->
        <div class="w-full aspect-video">
            <iframe
                id="badmoment-video"
                data-yt-player="true"
                class="w-full h-full"
                src="https://www.youtube.com/embed/r47pY0W26Og?enablejsapi=1&rel=0&modestbranding=1&controls=1&mute=0"
                title="BAD MOMENT — Clip"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        </div>

        <div class="grid sm:grid-cols-2 gap-6">
            <div class="relative group rounded-lg overflow-hidden border border-white/5 shadow-sm aspect-[210/297]">
                <img src="images/sb_badmoment.webp"
                     class="w-full h-full object-cover opacity-100 transition-opacity duration-500">
            </div>
            <div class="relative group rounded-lg overflow-hidden border border-white/5 shadow-sm aspect-[210/297]">
                <img src="images/mb_badmoment.webp"
                     class="w-full h-full object-cover opacity-100 transition-opacity duration-500">
            </div>
        </div>

        <!-- Footer Navigation -->
        <div class="px-6 lg:px-12 pt-12 border-t border-white/5 pointer-events-auto">
            <div class="flex flex-col sm:flex-row justify-between items-center sm:items-center gap-8 sm:gap-0 pt-4">

                <!-- Projet Précédent -->
                <a class="group text-left pointer-events-auto cursor-pointer flex items-center gap-3"
                   onclick="loadProject('interviewgoat')">

                    <span class="iconify transition-transform group-hover:-translate-x-1"
                          data-icon="lucide:arrow-left"
                          data-width="16"></span>

                    <div>
                        <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-1 group-hover:text-rose-500 transition-colors">
                            Projet Précédent
                        </span>
                        <span class="text-base sm:text-lg text-white font-medium">
                            Qui est le GOAT ?
                        </span>
                    </div>
                </a>

                <!-- Projet Suivant -->
                <a class="group text-right pointer-events-auto cursor-pointer flex items-center gap-3"
                   onclick="loadProject('sensibilisationijt')">

                    <div>
                        <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-1 group-hover:text-rose-500 transition-colors">
                            Projet Suivant
                        </span>
                        <span class="text-base sm:text-lg text-white font-medium">
                            PODIUM
                        </span>
                    </div>

                    <span class="iconify transition-transform group-hover:translate-x-1"
                          data-icon="lucide:arrow-right"
                          data-width="16"></span>
                </a>
            </div>
        </div>
    </div>
</div>
`,

    sensibilisationijt: `
<div class="flex-1 relative scroll-smooth bg-neutral-900/30 pb-8">

    <!-- Project Details Container -->
    <div class="w-full max-w-[1600px] mx-auto pb-12">

        <!-- Hero Image Area -->
        <div class="relative w-full h-[60vh] lg:h-[70vh] group">
            <video autoplay loop muted playsinline preload="none"
                   class="w-full h-full object-cover">
                <source src="images/sensibilisationijt.mp4" type="video/mp4">
            </video>

            <div class="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent"></div>

            <div class="absolute bottom-0 left-0 w-full p-6 lg:p-12">
                <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                    <div class="max-w-3xl">

                        <!-- Badges -->
                        <div class="flex items-center gap-3 mb-4">
                            <span
                                class="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white border border-white/20 rounded-full glass-panel">
                                2025
                            </span>
                            <span
                                class="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-rose-400 border border-rose-500/20 bg-rose-500/10 rounded-full">
                                Court-métrage
                            </span>
                        </div>

                        <!-- Title -->
                        <h1 class="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tighter text-white mb-4 leading-[1.1]">
                            PODIUM
                        </h1>

                        <!-- Description -->
                        <p class="text-base sm:text-lg text-neutral-300 font-light max-w-xl leading-relaxed">
                            Vidéo de sensibilisation réalisée pour l’association IJT. Les 100 métres au recrutement...
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Content Body -->
        <div class="px-6 lg:px-12 pt-12">

            <!-- Stats Grid -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 border-b border-white/5 pb-12">
                <div>
                    <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-2">Projet</span>
                    <span class="text-base text-white font-medium">Filmer une vidéo de sensibilisation</span>
                </div>
                <div>
                    <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-2">Rôle</span>
                    <span class="text-base text-white font-medium">Participation au tournage, Monteur vidéo</span>
                </div>
                <div>
                    <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-2">Contexte</span>
                    <span class="text-base text-white font-medium">BUT MMI • Projet d’étude</span>
                </div>
                <div>
                    <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-2">Outils</span>
                    <span class="text-base text-white font-medium">Premiere Pro</span>
                </div>
            </div>

        </div>

        <!-- Fullscreen Video (NO PADDING) -->
        <div class="w-full aspect-video">
            <iframe
                id="badmoment-video"
                data-yt-player="true"
                class="w-full h-full"
                src="https://www.youtube.com/embed/feERA8K9nWc?enablejsapi=1&rel=0&modestbranding=1&controls=1&mute=0"
                title="BAD MOMENT — Clip"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        </div>

        <!-- Footer Navigation -->
        <div class="px-6 lg:px-12 pt-12 border-t border-white/5 pointer-events-auto">
            <div class="flex flex-col sm:flex-row justify-between items-center sm:items-center gap-8 sm:gap-0 pt-4">

                <!-- Projet Précédent -->
                <a class="group text-left pointer-events-auto cursor-pointer flex items-center gap-3"
                   onclick="loadProject('badmoment')">

                    <span class="iconify transition-transform group-hover:-translate-x-1"
                          data-icon="lucide:arrow-left"
                          data-width="16"></span>

                    <div>
                        <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-1 group-hover:text-rose-500 transition-colors">
                            Projet Précédent
                        </span>
                        <span class="text-base sm:text-lg text-white font-medium">
                            BAD MOMENT
                        </span>
                    </div>
                </a>

                <!-- Projet Suivant -->
                <a class="group text-right pointer-events-auto cursor-pointer flex items-center gap-3"
                   onclick="loadProject('animationpokemon')">

                    <div>
                        <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-1 group-hover:text-rose-500 transition-colors">
                            Projet Suivant
                        </span>
                        <span class="text-base sm:text-lg text-white font-medium">
                            Animation Pokémon
                        </span>
                    </div>

                    <span class="iconify transition-transform group-hover:translate-x-1"
                          data-icon="lucide:arrow-right"
                          data-width="16"></span>
                </a>
            </div>
        </div>
    </div>
</div>
`,

    animationpokemon: `
<div class="flex-1 relative scroll-smooth bg-neutral-900/30 pb-8">

    <!-- Project Details Container -->
    <div class="w-full max-w-[1600px] mx-auto pb-12">

        <!-- Hero Image Area -->
        <div class="relative w-full h-[60vh] lg:h-[70vh] group">
            <video autoplay loop muted playsinline preload="none"
                   class="w-full h-full object-cover">
                <source src="images/animationpokemon.mp4" type="video/mp4">
            </video>

            <div class="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent"></div>

            <div class="absolute bottom-0 left-0 w-full p-6 lg:p-12">
                <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                    <div class="max-w-3xl">

                        <!-- Badges -->
                        <div class="flex items-center gap-3 mb-4">
                            <span
                                class="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white border border-white/20 rounded-full glass-panel">
                                2026
                            </span>
                            <span
                                class="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-rose-400 border border-rose-500/20 bg-rose-500/10 rounded-full">
                                Motion Design
                            </span>
                        </div>

                        <!-- Title -->
                        <h1 class="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tighter text-white mb-4 leading-[1.1]">
                            Animation Pokémon
                        </h1>

                        <!-- Description -->
                        <p class="text-base sm:text-lg text-neutral-300 font-light max-w-xl leading-relaxed">
                            Comment serait l’interface d’un ordinateur dans le monde Pokémon ? Voici l’animation qui dévoile ma vision.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Content Body -->
        <div class="px-6 lg:px-12 pt-12">

            <!-- Stats Grid -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 border-b border-white/5 pb-12">
                <div>
                    <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-2">Projet</span>
                    <span class="text-base text-white font-medium">Animer un bureau d'ordinateur</span>
                </div>
                <div>
                    <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-2">Rôle</span>
                    <span class="text-base text-white font-medium">Animation, Créateur graphique</span>
                </div>
                <div>
                    <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-2">Contexte</span>
                    <span class="text-base text-white font-medium">Projet personnel</span>
                </div>
                <div>
                    <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-2">Outils</span>
                    <span class="text-base text-white font-medium">After Effects, Illustrator</span>
                </div>
            </div>
        </div>

        <!-- Fullscreen Video (NO PADDING) -->
        <div class="w-full aspect-video">
            <iframe
                id="sensibilisation-ijt"
                data-yt-player="true"
                class="w-full h-full"
                src="https://www.youtube.com/embed/OGHL_w9Mc5c?enablejsapi=1&rel=0&modestbranding=1&controls=1&mute=0"
                title="Animation Pokémon"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen>
            </iframe>
        </div>

        <!-- Footer Navigation -->
        <div class="px-6 lg:px-12 pt-12 border-t border-white/5 pointer-events-auto">
            <div class="flex flex-col sm:flex-row justify-between items-center sm:items-center gap-8 sm:gap-0 pt-4">
        
                <!-- Projet Précédent -->
                <a class="group text-left pointer-events-auto cursor-pointer flex items-center gap-3"
                   onclick="loadProject('sensibilisationijt')">
        
                    <span class="iconify transition-transform group-hover:-translate-x-1"
                          data-icon="lucide:arrow-left"
                          data-width="16"></span>
        
                    <div>
                        <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-1 group-hover:text-rose-500 transition-colors">
                            Projet Précédent
                        </span>
                        <span class="text-base sm:text-lg text-white font-medium">
                            PODIUM
                        </span>
                    </div>
                </a>
        
                <!-- Projet Suivant (invisible mais garde la place) -->
                <div class="opacity-0 pointer-events-none flex items-center gap-3 select-none">
        
                    <div>
                        <span class="block text-xs text-neutral-500 uppercase tracking-widest mb-1">
                            Projet Suivant
                        </span>
                        <span class="text-base sm:text-lg text-white font-medium">
                            Aucun
                        </span>
                    </div>
        
                    <span class="iconify"
                          data-icon="lucide:arrow-right"
                          data-width="16"></span>
                </div>
            </div>
        </div>
    </div>
</div>
`,
};

function loadProject(name) {
    const container = document.getElementById("projectContent");
    container.classList.remove("fade-enter", "fade-enter-active");
    container.style.opacity = "0";

    setTimeout(() => {
        container.innerHTML = projectPages[name];

        container.classList.add("fade-enter");
        requestAnimationFrame(() => {
            container.classList.add("fade-enter-active");
            container.style.opacity = "1";

            const section = document.getElementById("realisations");
            const headerHeight = 120;
            const y = section.getBoundingClientRect().top + window.scrollY - headerHeight;
            window.scrollTo({ top: y, behavior: "smooth" });
        });

        setActiveProject(name);
        enableSmartSticky();
        initMobileMenu();

    }, 150);
}

function setActiveProject(name) {
    const buttons = document.querySelectorAll(".project-btn");

    buttons.forEach(btn => {
        const label = btn.querySelector(".project-label");
        label.classList.remove("font-semibold", "text-white");
        label.classList.add("text-neutral-400");
        label.classList.add("hover:text-white", "hover:translate-x-1", "hover:opacity-90");
    });

    const activeBtn = document.querySelector(`.project-btn[data-project="${name}"]`);
    if (!activeBtn) return;

    const label = activeBtn.querySelector(".project-label");
    label.classList.add("font-semibold", "text-white");
    label.classList.remove("text-neutral-400");
    label.classList.remove("hover:text-white", "hover:translate-x-1", "hover:opacity-90");
}

function initMobileMenu() {
    const mobileMenu = document.getElementById("mobile-menu");
    const openMenu = document.getElementById("open-menu");
    if (!mobileMenu || !openMenu) return;

    const disableScroll = () => document.body.style.overflow = "hidden";
    const enableScroll = () => document.body.style.overflow = "";

    const toggleMenu = () => {
        const isOpen = mobileMenu.classList.contains("opacity-100");
        mobileMenu.classList.toggle("opacity-100", !isOpen);
        mobileMenu.classList.toggle("opacity-0", isOpen);
        mobileMenu.classList.toggle("pointer-events-none", isOpen);
        isOpen ? enableScroll() : disableScroll();
    };

    openMenu.onclick = toggleMenu;

    mobileMenu.onclick = (e) => {
        if (e.target === mobileMenu) toggleMenu();
    };

    mobileMenu.querySelectorAll("a").forEach(link => {
        link.onclick = toggleMenu;
    });
}

window.addEventListener("DOMContentLoaded", () => {
    loadProject("illustrations");
    initMobileMenu();
});

function enableSmartSticky() {
    const sticky = document.querySelector(".lg\\:sticky");
    if (!sticky) return;

    const footer = document.querySelector("footer");
    const offset = 40;

    function updateSticky() {
        const stickyRect = sticky.getBoundingClientRect();
        const footerRect = footer.getBoundingClientRect();

        if (stickyRect.bottom > footerRect.top - offset) {
            sticky.style.position = "absolute";
            sticky.style.bottom = "0";
            sticky.style.top = "auto";
        } else {
            sticky.style.position = "";
            sticky.style.bottom = "";
            sticky.style.top = "";
        }
    }

    window.addEventListener("scroll", updateSticky);
    updateSticky();
}

let ytApiReady = false;

(function loadYouTubeAPI() {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
})();

window.onYouTubeIframeAPIReady = function () {
    ytApiReady = true;
    initYouTubePlayers();
};

function initYouTubePlayers() {
    if (!ytApiReady || typeof YT === "undefined" || !YT.Player) return;

    const iframes = document.querySelectorAll("iframe[data-yt-player='true']");

    iframes.forEach((iframe) => {
        if (iframe.dataset.playerInit === "true") return;

        iframe.dataset.playerInit = "true";

        new YT.Player(iframe, {
            events: {
                onStateChange: onPlayerStateChange
            }
        });
    });
}

function onPlayerStateChange(event) {
    const nav = document.getElementById("main-nav");
    if (!nav) return;

    if (event.data === YT.PlayerState.PLAYING) {
        nav.classList.remove("nav-show");
        nav.classList.add("nav-hide");
    }

    if (event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.ENDED) {
        nav.classList.remove("nav-hide");
        nav.classList.add("nav-show");
    }
}

const projectContent = document.getElementById("projectContent");

if (projectContent) {
    const observer = new MutationObserver(() => {
        initYouTubePlayers();
        initMobileMenu();
    });

    observer.observe(projectContent, {
        childList: true,
        subtree: true
    });
}

function signalCalufaButton() {
    const btn = document.querySelector("#calufa-site-btn");
    if (!btn) return;

    const wrapper = btn.closest(".radar-wrapper");
    if (!wrapper) return;

    let count = 0;

    const interval = setInterval(() => {
        const pulse = document.createElement("div");
        pulse.classList.add("radar-pulse");
        wrapper.appendChild(pulse);

        setTimeout(() => pulse.remove(), 1200);

        count++;
        if (count >= 3) clearInterval(interval);
    }, 500);
}

function triggerCalufaSignal() {
    setTimeout(() => {
        signalCalufaButton();
    }, 400);
}

let lastScroll = 0;
const nav = document.getElementById("main-nav");

window.addEventListener("scroll", () => {
    const current = window.scrollY;

    if (current > lastScroll && current > 50) {
        nav.style.transform = "translateY(-100%)";
        nav.style.opacity = "0";
    } else {
        nav.style.transform = "translateY(0)";
        nav.style.opacity = "1";
    }

    lastScroll = current;
});