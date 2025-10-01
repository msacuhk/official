const headerContent = `
    <header class="text-darkgray bg-lightorange font-title text-2xl">
    <div class="container mx-auto flex flex-wrap py-3 flex-col md:flex-row items-center">
        <a href="https://www.cuhk.edu.hk/english/" class="flex font-title font-medium items-center text-gray-900 mb-3 md:mb-0">
            <img src="img/CUHK Logo.png" class="w-24" alt="CUHK logo">
        </a>
        <a href="index.html" class="flex font-title font-medium items-center text-gray-900 mb-3 md:mb-0">
            <img src="img/MSA Logo Transparent.png" class="w-24" alt="MSA logo">
            <span class="ml-3 text-3xl font-bold">MSACUHK</span>
        </a>
        <nav
            class="md:ml-10 md:py-1 md:pl-0 md:border-l-2 md:border-darkgray flex flex-wrap items-center text-base justify-center z-50">
            <a href="about_us.html" class="ml-4 md:ml-10 hover:text-gray-900">About Us</a>
    <a href="#" class="mr-5 md:mr-8"></a>
            <a href="#" class="hover:text-gray-900">
                <div class="dropdown">
                    <button>Committee Members</button>
                    <ul class="dropdown-menu absolute hidden text-gray-700 pt-2">
                        <li class=""><a
                                class="rounded-t bg-lightbrown hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                href="committee_members_2024_2025.html">2024/2025</a></li>
                        <li class=""><a
                                class="rounded-t bg-lightbrown hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                href="committee_members_2023_2024.html">2023/2024</a></li>
                        <li class=""><a
                                class="rounded-t bg-lightbrown hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                href="committee_members_2022_2023.html">2022/2023</a></li>
                        <li class=""><a
                                class="rounded-t bg-lightbrown hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                href="committee_members_2021_2022.html">2021/2022</a></li>
                        <li class=""><a
                                class="bg-lightbrown hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                href="committee_members_2020_2021.html">2020/2021</a></li>
                        <li class=""><a
                                class="rounded-b bg-lightbrown hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                href="committee_members_2019_2020.html">2019/2020</a></li>
                    </ul>
                </div>
            </a>
    <a href="#" class="mr-5 md:mr-8"></a>
            <a href="#" class="hover:text-gray-900">
                <div class="dropdown">
                    <button>Events</button>
                    <ul class="dropdown-menu absolute hidden text-gray-700 pt-2">
                        <li class=""><a
                                class="rounded-t bg-lightbrown hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                href="events_2025.html">2025</a></li>
                        <li class=""><a
                                class="rounded-t bg-lightbrown hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                href="events_2024.html">2024</a></li>
                        <li class=""><a
                                class="rounded-t bg-lightbrown hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                href="events_2023.html">2023</a></li>
                        <li class=""><a
                                class="rounded-t bg-lightbrown hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                href="events_2022.html">2022</a></li>
                        <li class=""><a
                                class="bg-lightbrown hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                href="events_2021.html">2021</a></li>
                        <li class=""><a 
                                class="bg-lightbrown hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                href="events_2020.html">2020</a></li>
                        <li class=""><a
                                class="rounded-b bg-lightbrown hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                href="events_2019.html">2019</a></li>
                    </ul>
                </div>
            </a>
    <a href="#" class="mr-5 md:mr-8"></a>
            <a href="#" class="hover:text-gray-900">
                <div class="dropdown">
                    <button>Projects</button>
                    <ul class="dropdown-menu absolute hidden text-gray-700 pt-2">
                        <li class=""><a
                                class="rounded-t bg-lightbrown hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                href="project_rojak_mou.html">一齊Rojak Mou? Let’s Rojak Together</a></li>
                        <li class=""><a
                                class="rounded-b bg-lightbrown hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                href="project_family_tree.html">Family Tree System</a></li>
                        <li class=""><a
                                class="rounded-b bg-lightbrown hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                href="https://mycuhk-my.sharepoint.com/personal/z116382_link_cuhk_edu_hk/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fz116382%5Flink%5Fcuhk%5Fedu%5Fhk%2FDocuments%2FResources%20for%20CUHK%20Malaysians%2FAcademic%20Resources&view=0" 
                                target="_blank">Academic Resources</a></li>
                        <li class=""><a
                                class="rounded-b bg-lightbrown hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                href="https://mycuhk-my.sharepoint.com/:x:/r/personal/z116382_link_cuhk_edu_hk/_layouts/15/Doc.aspx?sourcedoc=%7B5E3283E2-2BEF-4A22-A646-1ED5ADE751DA%7D&file=MSACUHK%20Bazaar.xlsx&action=default&mobileredirect=true" 
                                target="_blank">Bazaar</a></li>
                    </ul>
                </div>
            </a>
    <a href="#" class="mr-5 md:mr-8"></a>
            <a href="sponsors.html" class="hover:text-gray-900">Sponsors</a>
    <a href="#" class="mr-5 md:mr-8"></a>
            <a href="#" class="hover:text-gray-900">
                <div class="dropdown">
                    <button>Sharing</button>
                    <ul class="dropdown-menu absolute hidden text-gray-700 pt-2">
                        <li class=""><a
                                class="rounded-t bg-lightbrown hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                href="current_students.html">Current Students</a></li>
                        <li class=""><a
                                class="bg-lightbrown hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                href="prospective_students.html">Prospective Students</a></li>
                        <li class=""><a
                                class="rounded-b bg-lightbrown hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                href="non_malaysians.html">Non-Malaysians</a></li>
                    </ul>
                </div>
            </a>
    <a href="#" class="mr-5 md:mr-8"></a>
            <a href="contact_us.html" class="md:mr-10 hover:text-gray-900">Contact Us</a>
        </nav>
    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a href="https://www.facebook.com/msacuhk/" class="text-gray-500" rel="noopener noreferrer"
                target="_blank">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
            </a>
            <a href="https://www.instagram.com/msacuhk" class="ml-3 text-gray-500" rel="noopener noreferrer"
                target="_blank">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
            </a>
        </span>
    </div>
    </header>
`
