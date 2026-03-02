import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function HealthChart({ metrics }) {
  const data = {
    labels: ['BMI Score', 'Water', 'Exercise', 'Sleep'],
    datasets: [
      {
        label: 'Your Metrics',
        data: [
          metrics.bmiScore || 0,
          metrics.waterScore || 0,
          metrics.exerciseScore || 0,
          metrics.sleepScore || 0,
        ],
        backgroundColor: [
          'rgba(34,197,94,0.7)',
          'rgba(59,130,246,0.7)',
          'rgba(245,158,11,0.7)',
          'rgba(168,85,247,0.7)',
        ],
        borderColor: [
          '#22c55e',
          '#3b82f6',
          '#f59e0b',
          '#a855f7',
        ],
        borderWidth: 2,
        borderRadius: 8,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { backgroundColor: '#1e293b', borderColor: '#22c55e', borderWidth: 1 },
    },
    scales: {
      y: {
        max: 30,
        grid: { color: 'rgba(34,197,94,0.1)' },
        ticks: { color: '#94a3b8' },
      },
      x: {
        grid: { display: false },
        ticks: { color: '#94a3b8' },
      },
    },
  }

  return (
    <div className="glass neon-border p-6 rounded-2xl">
      <h3 className="font-display text-green-400 text-lg mb-4">📊 Health Metrics</h3>
      <Bar data={data} options={options} />
    </div>
  )
}
