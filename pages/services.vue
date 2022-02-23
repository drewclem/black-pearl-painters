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

        <article class="mb-24">
          <h3 class="mb-3 opacity-75">Exterior Projects</h3>

          <p>
            From protecting your home from the elements, to providing a fresh modern upgrade, painting the exterior of
            your home can significantly improve your curb appeal. Black Peal Painters only uses premium materials to
            complete our projects. Here are some of the surfaces we apply coatings to everyday:
          </p>

          <div class="mb-4">
            <CheckText>Siding/Soffits</CheckText>
            <CheckText>Fascia/Trim</CheckText>
            <CheckText>Masonry</CheckText>
            <CheckText>Stucco</CheckText>
            <CheckText>Garage Doors</CheckText>
            <CheckText>Entry Doors</CheckText>
          </div>

          <p>
            Carpentry Repairs – Most painting companies will not touch carpentry, but Black Pearl Painters has their own
            carpentry division! We are used to completing work on soffit/facia, decks, railings, siding replacement,
            chimney board, and fences.
          </p>

          <p>
            Are you thinking outside the box, and don’t see a service listed? Our expert sales consultants, and
            experienced project managers can turn your vision into a reality. We would love to answer any of your
            questions! Sign up for an estimate today!
          </p>
        </article>

        <article>
          <h3 class="mb-3 opacity-75">Interior Projects</h3>

          <p>
            If your rooms need a little color, or if they are begging for a makeover, a fresh coat of paint in a
            striking new color can make a huge difference. If you dread the idea of taping, spackling, sanding, masking,
            and of course painting—why not leave it all to the professionals? Here are some of the surfaces we are
            applying coatings to everyday:
          </p>

          <div class="mb-4">
            <CheckText>Walls</CheckText>
            <CheckText>Trim/Moulding</CheckText>
            <CheckText>Ceilings</CheckText>
            <CheckText>Popcorn/Stipple Ceilings</CheckText>
            <CheckText>Cabinets</CheckText>
            <CheckText>Doors/Frames</CheckText>
          </div>

          <p>
            Do you not see the type of service you are looking for? Not many things surprise us anymore. We have done
            many custom finishes on various surfaces, so don’t hesitate to ask! Who knows, that “crazy” vision you have
            may not be so crazy after all. Sign up for an estimate today!
          </p>
        </article>
      </section>

      <section class="my-24">
        <h2>Commercial and Industrial</h2>
        <p>
          We love commercial and industrial coatings! We can do anything from new construction buildings to repaints of
          existing buildings that need a face lift! We have completed projects for the like of Puget Sound Energy,
          Doscusign, and Zulily (sponsor of the Seattle Sounder Soccer Team). If you need budgetary numbers, a
          specification for the project, or a plan on how to complete these projects, we can help! Sign up for an
          estimate today!
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
      </section>
    </div>
  </div>
</template>

<style scoped></style>
