<script lang="ts">



</script>
<!------------------------------------------------------------>

<h2>Exercise 3</h2>
<ul>
    <li>Start with the following array:
        <pre>
            const studentNames = [
                'Thea Payne',
                'Edward Wright',
                'Lily Le',
                'Damien Chavez',
                'Nevaeh Matthews',
                'Preston Kennedy',
                'Brianna Glass',
                'Allan Hayes',
                'Iris Arias',
                'Alec Lewis',
                'Ellie Gilmore',
                'Vihaan McGee',
                'Kayleigh Reyes',
                'Eli Romero',
                'Eliza McLean',
                'Crosby Erickson',
                'Sabrina Solis',
                'Ronin Benson',
                'Collins Harvey',
                'Cayden Curtis',
                'Alexis Suarez',
                'Soren Mitchell',
                'Willow Barnett',
                'Stephen Shelton',
                'Makenzie Alfaro',
                'Xzavier Murray',
                'Faith Lawson',
                'Lane Schneider',
                'Delaney Bravo',
                'Genesis Enriquez',
                'Nellie Gould',
                'Blaine Zuniga',
                'Leslie Martin',
                'Mateo Gardner',
                'Jordyn French',
                'Corey Moreno',
                'Mary Jennings',
                'Corbin Higgins',
                'Leighton Curtis',
                'Muhammad Terry',
                'Wren Stafford',
                'Alfredo Wells',
                'Cecilia Buchanan',
                'Enrique Madden',
                'Violette McLean',
                'Crosby Bond',
                'Alena Byrd',
                'Cristian Lim',
                'Giavanna Ball',
                'Shane Clayton',
                'Saige McMahon',
                'Jakob Garner',
                'Jacqueline Palacios',
                'Thaddeus Rubio',
                'Hadassah Chavez',
                'Ian Dougherty',
                'Alisson Moyer',
                'Ahmir Arnold',
                'Finley Soto',
                'Barrett Farmer',
                'Madelynn Galindo',
                'Salvatore Avalos',
                'Paloma Rush',
                'Kaiser Singh',
                'Vivienne Frederick',
                'Kase Young',
                'Zoey Benton',
                'Jamal Arias',
                'Aleah Eaton',
                'Leighton Donovan',
                'Azariah Mayer',
                'Yahir Leach',
                'Martha Mitchell',
                'Jaxon Nava',
                'Scout Nielsen',
                'Tru Harvey',
                'Nicole Arellano',
                'Kellan Lim',
                'Giavanna Ramos',
                'Angel Todd',
                'Zariah Orozco',
                'Keanu Landry',
                'Brynleigh Bravo',
                'Genesis Chang',
                'Ophelia Strong',
                'Axl Stein',
                'Leilany Doyle',
                'Kashton Simpson',
                'Anastasia Fitzpatrick',
                'Blaze Short',
                'Cheyenne Hoover',
                'Jaziel Hampton',
                'Leona Hayden',
                'Leroy Holland',
                'Mariah Camacho',
                'Tatum O’brien',
                'Joanna Ayala',
                'Tanner Curry',
                'Alison Murphy',
                'Cameron Watts',
            ];
        </pre>
    </li>
    <li>This list is great but it's not very useful as a list of strings.  Instead we want a list of objects.  Each object should represent a "Student" (so create a Student class).</li>
    <li>Convert the list (array) of names to a list (array) of Student objects.</li>
    <li>The Student class should have two properties: "firstName" and "lastName".</li>
    <li>In addition, there should be a third property (string) called "section" which will let us know where to seat each of these students.  There are 3 sections in the classroom: "A-H", "I-Q", "R-Z".  The students are assigned a section based on the first letter of their last name.</li>
    <li>Example of a Student object:
        <pre>
            &lbrace;
              firstName: 'Blaze',
              lastName: 'Short',
              section: 'R-Z',
            &rbrace;
        </pre>
    </li>
    <li>Once you have created a new students array, we will display the names.</li>
    <li>Create a page which displays a list of the students (one record per line), grouped by section.  Each student should be displayed with the last name then first name.  For example:
        <pre>
            Section: A-H
            ------------------------------
            Ayala, Joanna
            Holland, Leroy
            ...

            Section: I-Q
            ------------------------------
            O’brien, Tatum
            ...

            Section: R-Z
            ------------------------------
            Short, Blaze
            ...
        </pre>
    </li>
    <li>The names should be sorted alphabetically within each section.</li>
    <li>Submitted answer should be here: <a href="/exercises/3/my-answer" target="_blank">/exercises/3/my-answer</a></li>
</ul>

<!------------------------------------------------------------>
<style>



</style>

