<script>
import Name from '~/static/svg/name.vue';
import ButtonLink from './ButtonLink.vue';
import Message from '~/static/svg/message.vue';
import Phone from '~/static/svg/phone.vue';
import Email from '~/static/svg/email.vue';

  export default {
    components: {ButtonLink, Name, Message, Phone, Email},
    mounted() {
    if (typeof window !== 'undefined' && window.emailjs) {
      window.emailjs.init("6_qQeeQBRva8qMqj0");
    }
  },
    data() {
      return {
        form: {
          name: '',
          phone: '',
          email: '',
          message: '',
        }
      };
    },
    methods: {
      sendEmail() {
        const emailParams = {
          from_name: this.form.name,
          phone_number: this.form.phone,
          from_email: this.form.email,
          message: this.form.message,
        };
  
        window.emailjs.send('service_gdgz9qb', 'template_jr13fbk', emailParams)
          .then((response) => {
            alert('Email sent successfully!');
            this.clearForm();
          })
          .catch((error) => {
            alert('Failed to send email. Please try again.');
            console.error('EmailJS Error:', error);
          });
      },
      clearForm() {
        this.form.name = '';
        this.form.phone = '';
        this.form.email = '';
        this.form.message = '';
      }
    }
  };
  </script>

<template>
    <div class="actcontact">
        <h1>Send us a Message!</h1>
      <form @submit.prevent="sendEmail">
        <div class="contactdiv">
          <div class="divcontact1">
            <div class="detailside2" id="detailsname">
              <label for="name">Name:</label>
              <div class="input-wrapper2">
                <input v-model="form.name" type="text" placeholder="E.g. John Doe" id="name" name="name" required>
                <Name class="svgin2"/>
              </div>
            </div>
  
            <div class="detailside2">
              <label for="phone">Phone Number:</label>
              <div class="input-wrapper2">
                <input v-model="form.phone" type="tel" id="phone" placeholder="Phone Number" name="phone" required>
                <Phone class="svgin2"/>
              </div>
            </div>
  
            <div class="detailside2">
              <label for="email">Email:</label>
              <div class="input-wrapper2">
                <input v-model="form.email" type="email" id="email" placeholder="E.g. John.doe@gmail.com" name="email" required>
                <Email class="svgin2"/>
              </div>
            </div>
          </div>
          <div class="divcontact2">
            <div class="detailside2">
              <label for="message">Message:</label>
              <div class="input-wrapper2">
                <textarea v-model="form.message" id="message" name="message" placeholder="Write message..." rows="4" required></textarea>
                <Message class="svgin2"/>
              </div>
            </div>
          </div>
        </div>
        <div class="buttside"><ButtonLink type="submit" mainText="Send Message" :withBg="true" :widthFull="true"/></div>
      </form>
    </div>
  </template>
  
  
  
  <style scoped>
.actcontact h1 {
  font-size: 26px;
  font-weight: 400;
  color: var(--company-color2);
  margin-block: 0px;
}
.divcontact1 {
  width: 85%;
}
.divcontact2 {
  width: 85%;
}
.actcontact {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border: 1px solid rgba(79, 79, 79, 0.554);
  padding: 50px;
  background-color: white;
  margin-top: 50px;
  backdrop-filter: blur(20px);
}

/* Grid layout for larger screens */
.contactdiv {
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));  */
  gap: 20px; /* Reduce gap for smaller screens */
  margin-top: 30px;
}

/* Style for input fields */
.detailside2 input,
.detailside2 textarea {
  padding-block: 10px;
  padding-left: 15px;
  margin-bottom: 10px;
  margin-top: 5px;
  border: 1px solid #cccccc2b;
  border-radius: 7px;
  background-color: #f1f1f1;
  width: 100%; 
  font-size: 14px;
  box-shadow: rgba(50, 50, 93, 0.15) 0px 10px 30px -32px inset,
    rgba(0, 0, 0, 0.2) 0px 18px 36px -28px inset;
}

/* Style for textarea specifically */
.detailside2 textarea {
  height: 200px;
}

/* Positioning for input icons */
.input-wrapper2 {
  position: relative;
  width: 100%;
}

.input-wrapper2 input,
.input-wrapper2 textarea {
  padding-left: 40px;
  width: 100%;
}

.input-wrapper2 .svgin2 {
    position: absolute;
    left: 10px;
    top: 25px;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    fill: #888; /* Change this color to match your design */
}

/* Flexbox layout for labels and inputs */
.detailside2 {
  display: flex;
  width: 100%;
  flex-direction: column;
  text-align: left;
  gap: 10px; /* Adjust gap for smaller screens */
  margin-bottom: 10px;
  font-size: 15px;
  align-items: start;
}

/* Button container spacing */
.buttside {
  margin-top: 20px;
}

/* Media queries for responsiveness */
@media (max-width: 968px) {
  .actcontact {
    padding: 20px; /* Reduce padding on smaller screens */
    margin-top: 20px;
  }

  .contactdiv {
    grid-template-columns: 1fr; /* Stack items vertically on small screens */
    gap: 10px; /* Further reduce gap for small screens */
  }

  .actcontact h1 {
    font-size: 22px; /* Smaller font size for mobile */
  }

  .detailside2 input,
  .detailside2 textarea {
    width: 100%; /* Ensure inputs fit within container */
  }
}
</style>