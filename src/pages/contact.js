import React from 'react'

import Layout from "../components/layout"

const ContactPage = () => {
    return (
      <Layout>
        <h1>Contact Page</h1>
        <p>Email me at dogogo@gmail.com</p>
        <p>
          Contact me{" "}
          <a
            href="https://www.reddit.com/r/MMORPG/comments/ddtuye/looking_for_an_mmorpg/"
            target="_blank"
          >
            at twitter
          </a>
        </p>
      </Layout>
    )
}

export default ContactPage;