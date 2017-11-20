import React from 'react'

const Blog = () => {

  return (
    <div className="contentBox">
      <div className="section">
        <h2>GOAL DIRECTED DESIGN</h2>
          <p>
          What good is a painting never seen?<br />
          What good is a book never read?<br />
          What good is software never used?<br />
          </p>
          <p>
          The value of software is in the use of it, should no one want to use a piece of software, it doesn’t matter how effective, efficient, or elegant it is. Conversely, a poorly conceived, poorly designed, poorly constructed program is the best program if it’s the only one in use.
          </p>
          <p>
          Programming is not for computers, it’s for humans- this is the distinction between good and bad design. Poor design sees the user as just another part of the computer. This truth seems intuitively obvious, yet it’s also true that poor design continues to exists. Why?
          </p>
          <p>
          It could be conflicting interests from developers who are attempting to both build complex systems and account for the user’s experience. It could be too strong a focus on market trends and not the users’ needs, or it could be that the developers don’t truly understand the users that they are developing for. But all of these scenarios can be traced back to a fundamental error, not adhering to a sound design process.
          </p>
          <p>
          What do users want? In the most basic terms, users have goals which are achieved through tasks. It’s an easy mistake to make, though, to conflate the two. Users don’t think in terms of tasks; tasks are but a means to an end. Users are concerned with accomplishing goals, of which there are three types. The common understanding of a goal as an objective or intention is a user’s end goal: this is the particular problem they’re looking to solve. More immediately, a user is looking to feel a certain way- this is their experience goal. Lastly, a user has a broader life goal of who they want to be.
          </p>
          <p>
          The Goal-Directed Design process involves six stages:

          <h3>RESEARCH</h3>
          The first task in design is to establish the product vision. Once the development team establishes the goals and the schedule of the project, they conduct market research, consultations with subject matter experts, user interviews, and field studies in order to validate initial conceptual assumptions. The two most critical assets in development are employees and time, so it’s important that foundational issues are dealt with early and don’t resurface further into development.
          </p>
          <p>
          <h3>MODELING</h3>
          Next, it’s necessary to thoroughly understand the user. Without an in-depth knowledge of the target of the design, suiting their particular needs is impossible. After user interviews and observations, personas are developed to establish the various types of users and their goals and aspirations.
          </p>
          <p>
          <h3>REQUIREMENTS</h3>
          From there, requirements are constructed. It’s important to designate between what a product must do and what is nonessential to ensure that development is directed towards the highest priorities.
          </p>
          <p>
          <h3>DESIGN FRAMEWORK</h3>
          Then: the framework of the product. The team’s goal is to structure the underlying functionality of the product as well as laying out the experience using the product for each persona. Schemas and storyboards are utilized.
          </p>
          <p>
          <h3>DESIGN REFINEMENT</h3>
          Once the framework created in the last phase is approved, more concrete plans are drawn as a basis for the technical development. Here, form and behavior specifications are determined.
          </p>
          <p>
          <h3>DESIGN SUPPORT</h3>
          Development, no matter how thorough the preparation (and more-so in this modern age), is an exercise in hitting a moving target. Timelines, technical specs, and other factors are constantly shifting, and being flexible enough to accommodate that is the only way for a team to survive. Thus, the final step in the design process involves preparation for the constant adaptation and introspection of the development team.
          </p>
        </div>

        {
          // <div className="section">
          // <h2>TRAVELING SALESMAN</h2>
          //   <p>Ipsum</p>
          // </div>
        }

    </div>
  )
}

export default Blog
