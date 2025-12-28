export const authMiddleware = (req, res, next) => {
    // console.log('from auth middleware')
    
    const authHeader = req.headers['authorization'] || ''
    const [, accessToken] = authHeader.split(' ')
    const userData = jwtService.verify(accessToken);
    const { id, email } = userData;
    req.user = { id, email }

    next()
}
