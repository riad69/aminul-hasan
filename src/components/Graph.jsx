import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

const Graph = ({leads}) => {

  const data = Array.from({ length: 10 }, (_, setIndex) => {
    const start = setIndex * 25 + 1;
    const end = (setIndex + 1) * 25;
    const leadsInRange = leads.slice(start - 1, end);

    return {
      name: `${start}-${end}`,
      uv: leadsInRange.reduce((total, lead) => total + (lead.deal_status === 1 ? 1 : 0), 0),
    };
  });

  return (
    <section className='pt-16 ml-24'>
      <BarChart width={700} height={350} data={data}>
        <XAxis dataKey="name" stroke="#8884d8" />
        <YAxis />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="uv" fill="#8884d8" barSize={30} />
      </BarChart>
    </section>
  );
};

export default Graph