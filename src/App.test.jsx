import { describe, it, expect } from 'vitest'
import StatusBadge from './components/StatusBadge'

describe('StatusBadge Component', () => {
  it('renders with appropriate class and content for completed status', () => {
    const element = StatusBadge({ status: 'completed' })
    expect(element.props.className).toBe('badge-status badge-completed')
    expect(element.props.children).toBe('Completed')
  })

  it('renders with appropriate class and content for pending status', () => {
    const element = StatusBadge({ status: 'pending' })
    expect(element.props.className).toBe('badge-status badge-pending')
    expect(element.props.children).toBe('Pending')
  })

  it('renders with appropriate class and content for failed status', () => {
    const element = StatusBadge({ status: 'failed' })
    expect(element.props.className).toBe('badge-status badge-failed')
    expect(element.props.children).toBe('Failed')
  })
})

