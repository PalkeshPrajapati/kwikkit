export const articles = [
  {
    id: 'hidden-cost-food-delivery',
    category: 'Industry',
    categoryColor: 'var(--green-dark)',
    categoryBg: 'rgba(0, 155, 141, 0.1)',
    readTime: '5 min read',
    subtitle: 'A blatant, honest and unexpected look at what really goes into your food delivery bills and why the final amount is oftentimes higher than expected.',
    title: 'The Hidden Cost of Ordering Food Online in India — and How Much You\'re Actually Paying',
    summary: 'A direct and transparent look at what actually contributes to food delivery bills and why the final amount is often much higher than expected.',
    author: 'Kwikkit Team',
    published: 'April 24, 2026',
    iconBg: 'rgba(248,113,113,0.1)',
    iconColor: '#f87171',
    tags: ['Transparency', 'Industry Insights'],
    content: (
      <>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-primary)', marginBottom: '20px' }}>
          Ordering food online helps you save time and effort that might be spent on cooking, and oftentimes, you might be in such a rush that there is no option but to get your food delivered.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-primary)', marginBottom: '20px' }}>
          It can be your quick lunch, dinner after a long and tired day or even breakfast. You open a food delivery app, browse through various restaurants available, look at the menu and their prices, choose the food you would like to have and place an order within minutes with a few simple steps. It feels straightforward yet dishonest. Food delivery offers convenience at the expense of a little money. But what if this little amount of money turns into a noticeable increase in your monthly spending?
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-primary)', marginBottom: '24px' }}>
          It all starts with the unexpected increase in the amount that you need to pay at the final stage of payment. The difference is, however, not accidental. It comes from the blend of all the visible and hidden charges that you, as users, pay.
        </p>

        <div style={{
          background: 'linear-gradient(135deg, rgba(0, 95, 87, 0.05) 0%, rgba(0, 95, 87, 0.01) 100%)',
          borderLeft: '4px solid var(--green)',
          padding: '24px',
          borderRadius: '12px',
          marginBottom: '32px',
          marginTop: '32px',
        }}>
          <h4 style={{ fontFamily: "'Syne', sans-serif", fontWeight: '850', color: 'var(--green-dark)', marginBottom: '10px', fontSize: '16px' }}>The Crux of the Issue</h4>
          <p style={{ fontStyle: 'italic', margin: 0, color: 'var(--text-primary)', fontSize: '15px', lineHeight: '1.7' }}>
            The price difference is not accidental. It is a carefully layered combination of menu price markups, service cuts, packaging add-ons, and taxes calculated on top of these inflated values.
          </p>
        </div>

        <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: '800', fontSize: '24px', color: 'var(--green-dark)', marginTop: '36px', marginBottom: '18px', letterSpacing: '-0.02em' }}>Breaking Down the Bill</h3>

        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-primary)', marginBottom: '20px' }}>
          To understand the actual cost of ordering food online, you need to look beyond the actual food price and break down the cost of the bill that you usually ignore.
        </p>

        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-primary)', marginBottom: '20px' }}>
          <strong>1. Menu Inflations:</strong> When you first browse through the menu, the prices may appear pretty normal however, they may already be slightly higher than what the restaurant charges. This mostly happens because food delivery platforms charge restaurants a commission, so the restaurants, in return, increase their listed prices on platforms to maintain their own profit.
        </p>

        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-primary)', marginBottom: '20px' }}>
          <strong>2. Delivery Fees:</strong> Next comes the final payment stage. This is where you notice the additional charges. A part of these additional charges is the delivery fee, which is justified in itself as it covers the cost of transporting your food from the restaurant to your doorstep. This depends on various factors, including the distance from the restaurant to your location, the demand at the time of ordering and the time of the day.
        </p>

        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-primary)', marginBottom: '20px' }}>
          <strong>3. Platform Fees & Packaging:</strong> Another common addition is the platform fee that you pay for using the services of the app. This neither goes to the restaurant nor the delivery partner. Then comes the packaging charges. However less it might seem, restaurants oftentimes already factor packaging into their pricing, meaning that the packaging may just be an extra layer of cost for you to bear.
        </p>

        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-primary)', marginBottom: '24px' }}>
          <strong>4. Inflated GST:</strong> Then comes the Goods and Services Tax (GST). It is applied to the total amount. With all these additional charges, the amount increases, resulting in increased GST charges.
        </p>

        <div style={{
          background: 'linear-gradient(135deg, rgba(248, 113, 113, 0.08) 0%, rgba(248, 113, 113, 0.02) 100%)',
          border: '1px solid rgba(248, 113, 113, 0.25)',
          padding: '28px',
          borderRadius: '20px',
          marginBottom: '32px',
          marginTop: '32px',
          textAlign: 'center',
        }}>
          <span style={{ fontSize: '32px', display: 'block', marginBottom: '10px' }}>💸</span>
          <p style={{ fontWeight: '750', color: '#b91c1c', fontSize: '17px', lineHeight: '1.6', margin: 0, fontFamily: "'Syne', sans-serif" }}>
            That ₹500 biryani? By the time it reaches your door via a traditional platform, you've paid ₹700 or more. The math is simply not in your favour.
          </p>
        </div>

        <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: '800', fontSize: '24px', color: 'var(--green-dark)', marginTop: '36px', marginBottom: '18px', letterSpacing: '-0.02em' }}>The Alternative</h3>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-primary)', marginBottom: '20px' }}>
          This is the reason why the idea of zero-commission food delivery is gaining attention nowadays. In this model, the platforms do not charge restaurants a high commission. The Kwikkit app is one such model. Instead of adding multiple layers of hidden charges, the pricing is kept simple. No platform fee, no inflated menu prices, what you see is what you pay, plus the delivery cost.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-primary)', marginBottom: '24px' }}>
          It is not something revolutionary, it is just honest because food delivery should feel easy, not calculated.
        </p>
      </>
    ),
  },
  {
    id: 'supporting-local-restaurants',
    category: 'Community',
    categoryColor: 'var(--yellow)',
    categoryBg: 'rgba(255, 229, 0, 0.15)',
    readTime: '6 min read',
    subtitle: 'Supporting local restaurants is seen as a positive and fulfilling choice. However, in reality, it has a much deeper impact on both the local economy and the overall dining culture.',
    title: 'Why Supporting Local Restaurants in Chandigarh Matters More Than You Think',
    summary: 'Supporting local restaurants is seen as a positive and fulfilling choice. However, in reality, it has a much deeper impact on both the local economy and the overall dining culture.',
    author: 'Kwikkit Team',
    published: 'April 18, 2026',
    iconBg: 'rgba(0, 155, 141, 0.1)',
    iconColor: 'var(--green-light)',
    tags: ['Community', 'Restaurants'],
    content: (
      <>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-primary)', marginBottom: '20px' }}>
          The food culture in Chandigarh is remarkable for its diversity — from family-run small kitchens to popular cafes and eateries across different sectors. Chandigarh offers a wide range of options reflecting both traditional and modern tastes. These places are not just places of business but also form a distinct identity of the city.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-primary)', marginBottom: '20px' }}>
          Ordering from local restaurants ensures that your money stays within the community, offering a means of livelihood for the people residing there. It not only supports restaurant owners but also the kitchen staff, delivery workers and the suppliers. This, in return, not only helps local businesses grow and contribute to the local economy but also promotes their confidence, which acts as fuel for improvement and invention in the near future.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-primary)', marginBottom: '24px' }}>
          Supporting local restaurants does not necessarily mean that you visit them in person and eat there, which is not always feasible or possible. You can support these local restaurants by opting to order from them online, even when you have a variety of different high-end restaurants available just a click away.
        </p>

        <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: '800', fontSize: '24px', color: 'var(--green-dark)', marginTop: '36px', marginBottom: '18px', letterSpacing: '-0.02em' }}>The Platform Problem</h3>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-primary)', marginBottom: '20px' }}>
          While many of you may have been ordering food online from local restaurants at a much higher price, have you ever wondered if that extra expense is really helping the restaurants, or are they just a source of profit for food delivery platforms?
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-primary)', marginBottom: '20px' }}>
          Most restaurants are not thriving on food delivery platforms, but rather, they are just surviving. Most of the currently used food delivery models do not favour restaurants. Platforms charge high commission on orders from restaurants. These restaurants, in return, increase their prices online or adjust their quality so as not to affect themselves and remain in a profitable business.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-primary)', marginBottom: '20px' }}>
          This affects customers as well, as you end up paying more and oftentimes have to compromise with food quality.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-primary)', marginBottom: '24px' }}>
          What seems like an act of positivity and upliftment — ordering from a local restaurant — might actually be working against them if the platform is extracting 25% of every order.
        </p>

        <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: '800', fontSize: '24px', color: 'var(--green-dark)', marginTop: '36px', marginBottom: '18px', letterSpacing: '-0.02em' }}>What Real Support Looks Like</h3>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-primary)', marginBottom: '20px' }}>
          Supporting local restaurants through online platforms means being aware of the challenges faced by restaurant owners and choosing platforms that offer fairer systems, changing the equation. For the same causeway, Zero Commission models are becoming famous nowadays. Kwikkit works on the same model, allowing restaurants to list their actual prices without inflation and without needing to compromise on the quality of food and their margins.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-primary)', marginBottom: '20px' }}>
          By removing high commissions and unnecessary hidden charges, restaurants operate sustainably while customers get the same taste at the same expense.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-primary)', marginBottom: '20px' }}>
          Your act of making small changes can make a real difference. Ordering from restaurant-friendly platforms contributes to a healthier ecosystem where each of the units involved — the platform, restaurant and the consumer — all benefit.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-primary)', marginBottom: '24px' }}>
          Supporting local restaurants is not just about intention. It's about making the right choice because a strong food culture does not survive on demand alone. It survives on fairness.
        </p>
      </>
    ),
  },
  {
    id: 'biryani-experiment-chandigarh',
    category: 'Industry',
    categoryColor: 'var(--green-dark)',
    categoryBg: 'rgba(0, 155, 141, 0.1)',
    readTime: '5 min read',
    subtitle: 'What began as a dull, uneventful day quietly unfolded into one filled with new insights and unexpected discoveries. This was not about biryani but rather understanding how convenience sometimes comes with hidden charges.',
    title: 'I ordered the same biryani from 5 Chandigarh restaurants on 3 different apps — here’s what I actually paid',
    summary: 'An experiment ordering the same biryani from 5 Chandigarh restaurants on 3 different apps to expose how price changes based on the platform.',
    author: 'Kwikkit Team',
    published: 'May 10, 2026',
    iconBg: 'rgba(248,113,113,0.1)',
    iconColor: '#f87171',
    tags: ['Transparency', 'Case Study'],
    content: (
      <>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-primary)', marginBottom: '20px' }}>
          There are days with no plans, no purpose and no urgency bringing a feeling of emptiness. But in that space came an idea which seemed like a curious yet another boring experience. To my surprise, it went far beyond anyone\'s supposition. The story of a simple yet revealing experiment unfolded unknowingly on this day. I ordered biryani. Not just one but the same biryani from five different restaurants using three food delivery platforms using different models of servicing in Chandigarh. What unfolded was anything but simple.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-primary)', marginBottom: '20px' }}>
          At first, the prices seemed pretty similar. Each of the platform listed biryani within a close range. But as I proceeded towards the checkout, it told a different story. Costs began stacking up one after another including delivery fees, packaging charges, surge pricing, platform fees and many more. A priced meal suddenly seemed significantly expensive.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-primary)', marginBottom: '20px' }}>
          Across the three different delivery platforms, the final amount paid by me differed noticeably and somewhat unreasonably. In some cases, I even ended up paying nearly 20% - 25% more than the listed price. What piqued my interest more was the difference in the prices of the same biryani of the same restaurant just on different platforms. It raised an obvious question as to why the cost of a meal changes based on the platform service being used. This led me to dig deeper into these platform services and I came across my answer.
        </p>

        <div style={{
          background: 'linear-gradient(135deg, rgba(0, 95, 87, 0.05) 0%, rgba(0, 95, 87, 0.01) 100%)',
          borderLeft: '4px solid var(--green)',
          padding: '24px',
          borderRadius: '12px',
          marginBottom: '32px',
          marginTop: '32px',
        }}>
          <h4 style={{ fontFamily: "'Syne', sans-serif", fontWeight: '850', color: 'var(--green-dark)', marginBottom: '10px', fontSize: '16px' }}>The Core Finding</h4>
          <p style={{ fontStyle: 'italic', margin: 0, color: 'var(--text-primary)', fontSize: '15px', lineHeight: '1.7' }}>
            The answer lay in the commission-based models being used by the different platforms. Often times, restaurants pay a sum for each order to the platform which makes them inflate their listing prices so as to maintain their profit-margin. This seemed reasonably fair and also answered the question as to why the in-person price and online listed price varied for the same menu of the same restaurant.
          </p>
        </div>

        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-primary)', marginBottom: '20px' }}>
          The commission model that gained my interest more was the zero-commission based platform model that fundamentally changed this rigid, overcharging dynamic. A zero-commission platform model do not charge restaurants a high commission. Instead of adding multiple layers of hidden charges, the pricing is kept simple. No platform fee, no inflated menu prices, what you see is what you pay plus the delivery cost.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-primary)', marginBottom: '20px' }}>
          This meant that the restaurants would no longer have to increase the listed price of their food ultimately leading to the customers paying fair and reasonable prices for their food. An honest pricing option where the restaurants would be able to focus on the quality of food rather than compensating for platform cuts.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-primary)', marginBottom: '24px' }}>
          Transparency was the key in such models which would create a fairer eco-system for both the consumers and the restaurant owners. In the end, what began as a dull, uneventful day quietly unfolded into one filled with new insights and unexpected discoveries. This was not about biryani but rather understanding how convenience sometimes comes with hidden charges. And more importantly how a different platform-model would make this experience better for everyone involved.
        </p>
      </>
    ),
  },
  {
    id: 'fees-math-calculated',
    category: 'Community',
    categoryColor: 'var(--yellow)',
    categoryBg: 'rgba(255, 229, 0, 0.15)',
    readTime: '4 min read',
    subtitle: 'We did the math — you’ve probably spent ₹15,000 this year on fees you didn’t notice. A breakdown of how minor platform charges quietly accumulate.',
    title: 'We did the math — you’ve probably spent ₹15,000 this year on fees you didn’t notice',
    summary: 'A deep dive into how ₹30 to ₹70 added silently at checkout accumulates to over ₹15,000 a year for regular delivery users.',
    author: 'Kwikkit Team',
    published: 'May 3, 2026',
    iconBg: 'rgba(0, 155, 141, 0.1)',
    iconColor: 'var(--green-light)',
    tags: ['Community', 'Restaurants'],
    content: (
      <>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-primary)', marginBottom: '20px' }}>
          It feels insignificant at first. A small delivery charge, minimum packaging fee, maybe even convenience fee and platform fee quietly added at checkout. But when we sat down and actually did the math, the numbers told a very different story. You\'ve probably spent close to ₹15,000 this year on fees, you have barely even noticed if you usually order food online.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-primary)', marginBottom: '20px' }}>
          Think of how often you order food or make small online purchases. Might be twice or thrice a week. Each order carries an extra ₹30 to ₹70 disguised as different kinds of charges which seem harmless individually and are often times ignored in exchange for convenience. But over months, these invisible costs pile up faster than you would expect and much more in number than they seem at first.
        </p>

        <div style={{
          background: 'linear-gradient(135deg, rgba(255, 229, 0, 0.08) 0%, rgba(255, 229, 0, 0.02) 100%)',
          borderLeft: '4px solid var(--yellow)',
          padding: '24px',
          borderRadius: '12px',
          marginBottom: '32px',
          marginTop: '32px',
        }}>
          <h4 style={{ fontFamily: "'Syne', sans-serif", fontWeight: '850', color: '#856404', marginBottom: '10px', fontSize: '16px' }}>Let\'s Do The Math</h4>
          <p style={{ fontStyle: 'italic', margin: 0, color: 'var(--text-primary)', fontSize: '15px', lineHeight: '1.7' }}>
            If you place just four orders a week and pay an average of ₹45 in added fees each time, that’s ₹180 a week. Multiply that by 52 weeks, and you’re already at ₹9,360. Now, let\'s factor in the occasional higher charges such as surge pricing, distance fees, or peak-time add ons and it’s not hard to see how the total climbs well beyond ₹10,900, inching closer to ₹15,000 annually.
          </p>
        </div>

        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-primary)', marginBottom: '20px' }}>
          What makes these hidden charges piling up more frustrating is how subtly these charges are added. They are rarely highlighted in the front and instead appear at the final step when you have already committed to placing the order. Over time this normalisation of small extras changes how we perceive pricing altogether, often times accepting that the listed price and the final amount to be paid will have a substantive difference.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-primary)', marginBottom: '20px' }}>
          The root cause of this issue lies in the model of delivery platforms. Commission-based systems lead to a layered pricing structure where costs are distributed across multiple points sometimes visible often times hidden. This keeps the upfront price attractive and aims to shifts the real expense to the background.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-primary)', marginBottom: '24px' }}>
          There is also a growing conversation around alternatives to these models, particularly the zero-commission based platform models. By removing the need for restaurants to pay hefty commissions, such models can reduce the pressure to inflate prices. They do not rely on hidden charges. The pricing is kept simple and up-front. This leads to more transparency in billing and creates a fairer ecosystem for all the three parties involved i.e., the consumer, the restaurant and the platform involved.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-primary)', fontWeight: '600', marginBottom: '24px' }}>
          Convenience does not mean lack of clarity. As consumers, its your duty to become more aware of these patterns in the first step. And then finally, would you realise that these small fees were never meant to be small.
        </p>
      </>
    ),
  }
];
