<script>
import CheckText from '@/components/CheckText'
import BasePageHeading from '@/components/BasePageHeading'
export default {
  name: 'Services',
  components: {
    CheckText,
    BasePageHeading,
  },
}
</script>

<template>
  <div class="container mx-auto px-4 lg:px-0 mt-12">
    <BasePageHeading>Our Services</BasePageHeading>

    <div class="md:grid grid-cols-2 gap-12">
      <p>
        Black Pearl Painters is a full service painting company that specializes in residential, commercial, and
        industrial coatings. This full service includes carpentry, prep work needed to make sure the substrate is ready
        for paint, and applying the coating.
      </p>
      <div>
        <h2 class="text-3xl mb-4">
          Check us out on
          <a
            href="https://www.homeadvisor.com/rated.BlackPearlPainters.73129431.html"
            class="text-gray-700 underline hover:text-black"
            >Home Advisor!</a
          >
        </h2>
        <img class="md:w-1/2" src="~/assets/images/home-advisor.png" alt="Awards from Home Advisor" />
      </div>
    </div>

    <div class="md:w-1/2 mx-auto">
      <section class="my-24">
        <h2 class="text-lg md:text-xl mb-6">Residential Services</h2>

        <article>
          <h3 class="mb-3 opacity-75">Interior Projects</h3>

          <p>
            Your home or property is special, and—like many Americans—it is your biggest investment. At Black Pearl
            Painters, we take great care of your property and possess the essential skills that are required for surface
            preparation, and understanding the broad range of coating varieties.
          </p>

          <p>
            We also have the ability to diagnose and solve the unique challenges of every project. Our skilled
            professionals work to ensure that surfaces are properly prepared before starting any job, and extra
            attention is given to the covering of areas that are not being painted. We understand the importance of a
            job well done, which includes all aspects of the project from start to finish.
          </p>

          <div class="mb-4">
            <h4 class="mb-2">Complete Interior Painting</h4>
            <CheckText>Walls</CheckText>
            <CheckText>Ceilings</CheckText>
            <CheckText>Doors</CheckText>
            <CheckText>Windows</CheckText>
            <CheckText>Baseboard, Crown and other Trim Mouldings</CheckText>
            <CheckText>Cabinets</CheckText>
          </div>
          <div class="mb-4">
            <h4 class="mb-2">Other Interior Services</h4>
            <CheckText>Cabinetry</CheckText>
            <CheckText>Entertainment Systems</CheckText>
            <CheckText>Kitchen Cabinets</CheckText>
          </div>
        </article>

        <article class="mb-24">
          <h3 class="mb-3 opacity-75">Exterior Projects</h3>

          <p>
            We offer a complete line of exterior services to cover any painting project. All painted surfaces will be
            properly prepared before receiving any finishes. We only use premium prep and final materials and paint to
            ensure a long-lasting paint job.
          </p>

          <div class="mb-4">
            <h4 class="mb-2">Complete Exterior Painting</h4>
            <CheckText>Wood, Composite &amp; Vinyl Siding</CheckText>
            <CheckText>Concrete</CheckText>
            <CheckText>Doors &amp; Windows</CheckText>
            <CheckText>Fascia and Eaves</CheckText>
            <CheckText>Decks, Railings, and Patio Covers</CheckText>
            <CheckText>Wrought Iron Fences, Railings</CheckText>
          </div>

          <div class="mb-4">
            <h4 class="mb-2">Other Related Services/Replacement Services</h4>
            <CheckText>Wood Replacement</CheckText>
            <CheckText>Wood Rot Replacement</CheckText>
            <CheckText>Wood Repairs</CheckText>
            <CheckText>Light Carpentry</CheckText>
            <CheckText>Decks and Patio Covers</CheckText>
            <CheckText>Mildewcide Paint Additives</CheckText>
          </div>
        </article>
      </section>

      <section class="my-24">
        <h2>Commercial and Industrial Painting</h2>
        <p>
          Keeping your business looking its best reflects the level of care and attention you give to your customers. At
          Black Pearl Painters we are able to provide services that go beyond giving your building a fresh coat of
          paint. We take care to complete the job as quickly and efficiently as possible while staying out of the way so
          you can continue to serve your customers. We love commercial and industrial coatings! We can do anything from
          new construction buildings to repaints of existing buildings that need a face lift! We have completed projects
          for the like of Puget Sound Energy, Doscusign, and Zulily (sponsor of the Seattle Sounder Soccer Team). If you
          need budgetary numbers, a specification for the project, or a plan on how to complete these projects, we can
          help! Sign up for an estimate today!
        </p>
      </section>

      <section class="my-24">
        <h2>HOAs and Multifamily</h2>
        <p>
          Painting HOAs and multifamily paint projects is nothing new for us. We have completed many large capital
          painting projects in the Puget Sound and surrounding areas. We not only work with HOA members, but also the
          property management companies who help manage your properties. We can help with budgetary numbers,
          specifications, and notification systems for all tenants. Sign up for an estimate today!
        </p>

        <div class="mb-4">
          <h4 class="mb-2">Services Include</h4>
          <CheckText>Exterior Painting</CheckText>
          <CheckText>Interior Painting</CheckText>
          <CheckText>Pressure Washing and Cleaning</CheckText>
          <CheckText>Caulking</CheckText>
          <CheckText>Contrete Tilt-up buildings</CheckText>
          <CheckText>Epoxy Flooring Systems</CheckText>
          <CheckText>Graffiti Removal &amp; Anti-Graffiti coatings</CheckText>
          <CheckText>Warehouse Ceiling and Ceiling Painting</CheckText>
          <CheckText>Waterproofing Elastomeric Paint Systems</CheckText>
          <CheckText>Remove, Replace, or Repairing Expansion Joints</CheckText>
        </div>
      </section>

      <section class="my-24">
        <h2>Carpentry</h2>
        <p>
          Do you have some pre-painting or pre-staining carpentry needs? Let the seriously great carpenters of Black
          Pearl take care of it for you!
        </p>
        <p>
          There’s no need to use a separate contractor before your painting project, we have a team of seriously amazing
          carpenters ready to handle projects large and small. Black Pearl’s carpenters can expertly reside our home,
          complete extensive or simple rot repairs, and/or install composite decking. Enjoy the benefits of working with
          a single team for your carpentry and painting needs and avoid having the headaches of juggling multiple
          contractors. Reach out today if you need help!
        </p>
      </section>
    </div>
  </div>
</template>

<style scoped></style>
