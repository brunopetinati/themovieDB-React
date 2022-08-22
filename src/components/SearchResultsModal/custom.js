import colors from '../../constants/colors'
import { rem } from 'polished'

const customModalStyle = {
  content: {
    top:'50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: rem(1300),
    height: rem(600),
    backgroundColor: colors.body,
    borderRadius: '3%'
  }
}

export default customModalStyle;